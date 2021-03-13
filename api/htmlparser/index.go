package htmlparser

import (
	"log"

	"github.com/gocolly/colly"
)

func parseDetailPage(url string) {

}

func Parse(url string) (body string){
	log.Print(url)
	collector := colly.NewCollector()
	collector.OnHTML("body", func(e *colly.HTMLElement) {
		//e.DOM.Find("script").Remove()
		body = e.Text
	})
	collector.OnError(func (res *colly.Response, err error) {
		log.Print("error " + err.Error())
	})
	collector.OnResponse(func (res *colly.Response) {
		log.Print(res.StatusCode)
	})
	collector.Visit(url)
	return
}