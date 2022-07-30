package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html"
)

func main() {
	engine := html.New("./static", ".html")

	app := fiber.New(fiber.Config{
		Views: engine,
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			return c.Render("index", fiber.Map{
				"Title":       "DETECTIVEXXIII",
				"Weburl":      os.Getenv("WEBURL"),
				"Ogimage":     os.Getenv("WEBURL") + "/ogimage.jpg",
				"Description": os.Getenv("DESCRIPTION"),
			})
		},
	})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title":       "Home",
			"Weburl":      os.Getenv("WEBURL"),
			"Ogimage":     os.Getenv("WEBURL") + "/ogimage.jpg",
			"Description": os.Getenv("DESCRIPTION"),
		})
	})

	app.Get("/login", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title":       "Login",
			"Weburl":      os.Getenv("WEBURL"),
			"Ogimage":     os.Getenv("WEBURL") + "/ogimage.jpg",
			"Description": os.Getenv("DESCRIPTION"),
		})
	})

	app.Static("/", "./static")

	app.Listen(":4000")

}
