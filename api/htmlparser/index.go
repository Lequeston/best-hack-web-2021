package htmlparser

import (
	"fmt"

	"github.com/gocolly/colly"
	"github.com/PuerkitoBio/goquery"
)

func Parse(url string) {
	collector := colly.NewCollector()
	collector.OnHTML("body", func(e *colly.HTMLElement) {
		e.DOM.Each(func (iter int, sel *goquery.Selection){
			fmt.Println(iter)	
		})
	})
	collector.OnError(func (res *colly.Response, err error) {
		fmt.Println(err.Error())
	})
	collector.OnResponse(func (res *colly.Response) {
		fmt.Println(res.StatusCode)
	})
	collector.Visit(url)
}