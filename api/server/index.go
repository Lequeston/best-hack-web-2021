package server

import (
	"io"
	"log"
	"net/http"
	"os"
	"strconv"

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

	test := func(w http.ResponseWriter, r *http.Request) {
		io.WriteString(w, "Hello, I am work")
	}
	router.HandleFunc("/test", test).Methods("GET")

	return
}

func Start() {
	parseEnvVariables()

	address := host + ":" + strconv.Itoa(port)
	router := initRouter()

	log.Print(address)
	log.Fatal(http.ListenAndServe(address, router))
}