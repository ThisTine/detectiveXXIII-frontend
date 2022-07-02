package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html"
)

func main() {
	engine := html.New("./static", ".html")

	app := fiber.New(fiber.Config{
		Views: engine,
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			return c.Render("index", fiber.Map{
				"Title": "app name",
			})
		},
	})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title": "home",
		})
	})

	app.Get("/login", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title": "login",
		})
	})

	app.Static("/", "./static")

	app.Listen(":4000")

}
