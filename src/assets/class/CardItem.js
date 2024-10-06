import { Calendar } from "./Calendar";

class ItemCard {
  constructor(name, text, start, end) {
    this.name = name;
    this.text = text;
    this.start = new Date(start);
    this.end = new Date(end);
  }

  setCalendar() {
    const calendar = new Calendar(this.text, this.start, this.end);
    return calendar;
  }
}

class Project extends ItemCard {
  constructor(
    name,
    text,
    start,
    end,
    description,
    technologies,
    imgUrl,
    altImg,
    vdoUrl,
    link
  ) {
    super(name, text, start, end);
    this.description = description;
    this.technologies = technologies;
    this.imgUrl = require(imgUrl);
    this.altImg = altImg;
    this.vdoUrl = require(vdoUrl);
    this.link = link;
  }
}

// class Formation extends ItemCard {
//   constructor(name, text, start, end) {
//     super(name, text, start, end);
//   }
// }
// class Experience extends ItemCard {
//   constructor(name, text, start, end) {
//     super(name, text, start, end);
//   }
// }

// export { Project, Formation, Experience };
