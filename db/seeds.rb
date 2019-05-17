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

    skill_set = {
      "Languages": "Ruby, Python, SQL, C#, HTML, CSS, JavaScript, Swift, SASS",
      "Databases": "MSSQL, SQLite, MySQL",
      "Frameworks": "DJANGO, Jinja, jQuery, Bootstrap, React, Ruby on Rails",
      "Tools": "Selenium, Visual Studio Web/Performance/Unit testing, JIRA, Gulp, Splunk, New Relic, Redgate, JMeter, oXygen, Heroku",
      "IDE": "Visual Studio, RubyMine, XCode, Eclipse, Delphi, PowerShell, MS SQL Management Studio",
      "Source Control:": "Bitbucket, Team Foundation Version Control, GITLAB, GITHUB"
    }

    skill_set.each do |t, b|
      Skill.create({
        title: t,
        body: b
        })
    end

    Education.create({
      school: "Ural Federal University - Yekaterinburg, RU",
      degree: "MS in Engineering in computer technology ",
      date_ended: 2011-06-01
      })

    Education.create({
      school: "Yekaterinburg Engineering Technical School - Yekaterinburg, RU",
      degree: "BS in Radio Technical Services in Radio Technical Services",
      date_ended: 206-06-01
      })

8.times do |time|
  Project.create({
      title: "Title #{time}",
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      thumb_image: '348x225.png',
      position: time
      })
end

Project.create({
    title: "SpaceX API",
    body: "This is an Unofficial SpaceX Open Source REST API for rocket, core, capsule, pad, and launch data.
    This public API does not require authentication and includes endpoints for; Launches, Rockets, Capsules,
    Company Info, Roadster Info and more. SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
    thumb_image: "spacex_thumb.jpg",
    position: 1
    })