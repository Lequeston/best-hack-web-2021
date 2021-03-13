package server

import (
	"io"
	"log"
	"net/http"
	"net/url"
	"os"
	"strconv"

	"github.com/Lequeston/best-hack-web-2021/htmlparser"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

var port int = 8080
var host string = "localhost"

func init() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func parseEnvVariables() {
	if portEnv:= os.Getenv("PORT"); portEnv != "" {
		if parsePort, err := strconv.Atoi(portEnv); err == nil {
			port = parsePort
		} else {
			log.Print(err)
		}
	} else {
		log.Print("Not found PORT env")
	}

	if hostEnv := os.Getenv("HOST"); hostEnv != "" {
		host = hostEnv
	} else {
		log.Print("Not found HOST env")
	}
}

func initRouter() (router *mux.Router){
	r := mux.NewRouter()
	router = r.PathPrefix("/api").Subrouter()

	search := func(w http.ResponseWriter, r *http.Request) {
		searchWord := r.FormValue("search")
		io.WriteString(w, htmlparser.Parse("https://www.wildberries.ru/catalog/0/search.aspx?search=" + url.QueryEscape(searchWord)))
	}
	router.HandleFunc("/", search).Methods("GET").Queries("search", "{search}")

	return
}

func Start() {
	parseEnvVariables()

	address := host + ":" + strconv.Itoa(port)
	router := initRouter()

	log.Print(address)
	log.Fatal(http.ListenAndServe(address, router))
}