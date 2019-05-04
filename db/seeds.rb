# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do |time|
  Blog.create({
    title: "Test Title #{time}",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
    })
end

Experience.create({
  title: "Software Development Engineer In Test",
  organization: "PlanSource",
  body: "Develop and Design test automation framework for web application using Selenium written in Ruby language. (Ruby, MySQL, RESTful API, PageObject);
        Administrate continues integration 'QA Automation' builds running on Jenkins, Improve, maintenance and monitor test stability;
        Develop/execute automated tests;
        Collaborate with other QA Staff, Developers, Architects, Business Analysts and Management;
        Train QA Engineers to work with framework;
        Keep current with the latest Automation tools and trends Technology and tools used: Ruby, Selenium, PageObject, ActiveRecords, MySQL, Ruby on Rails, Bootstrap, SASS/LESS, CSS, HTNL5, React, AJAX, Postman, API, JavaScript, Linux, MaxOS, Windows",
  date_started: 2018-01-01,
  date_ended: nil,
  location: "Salt Lake City, UT"
  })

  Experience.create({
    title: "Software Test Engineer",
    organization: "Eccovia Solutions",
    body: "Develop Test Automation Scripts for data base driven ClientTrack web application, following
          Department of Housing and Urban Development, HL7, Care Coordination etc specifications and
          standards;
          Using Python, SQL, C#, HTML, CSS, JavaScript languages along with tools such as Selenium, Visual
          Studio Web/Performance/Unit testing, JIRA, Gulp, Redgate; Develop, test, maintain XML schemes
          (oXygen);
          Develop SQL procedures and functions for data-driven testing;
          Develop, run performance and load testing(Splunk, New Relic, VS, JMeter, python scripts, SQL,
          PowerShell);
          Develop, execute and maintain APIs test scripts(FHIR server, Mirth Connect, python, VS);
          Develop, execute Back-End Unit testing ( SQL );",
    date_started: 2017-01-01,
    date_ended: 2017-12-31,
    location: "Murray, UT"
    })
