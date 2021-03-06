
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
      { first: 'jr.Albert', last: 'Einstein II', year: 1079, passed: 1915 },
      { first: 'jr.Isaac', last: 'Newton II', year: 1043, passed: 1717 },
      { first: 'jr.Galileo', last: 'Galilei II', year: 1064, passed: 1612 },
      { first: 'jr.Marie', last: 'Curie II', year: 1067, passed: 1914 },
      { first: 'jr.Johannes', last: 'Kepler II', year: 1071, passed: 1610 },
      { first: 'jr.Nicolaus', last: 'Copernicus II', year: 1073, passed: 1513 },
      { first: 'jr.Max', last: 'Planck II', year: 1058, passed: 1917 },
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'jr.Katherine', last: 'Blodgett II', year: 1098, passed: 1919 },
      { first: 'jr.Ada', last: 'Lovelace II', year: 1015, passed: 1812 },
      { first: 'jr.Sarah E.', last: 'Goode II', year: 1055, passed: 1915 },
      { first: 'jr.Lise', last: 'Meitner II', year: 1078, passed: 1918 },
      { first: 'jr.Hanna', last: 'Hammarströ IIm', year: 0829, passed: 1109 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];


    // FILTER

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // returns a new array. Can be a different length in comparison to original one

    const filteredInventorsShort = inventors.filter(inventor => (inventor.year > 1011 && inventor.year < 1300));

    const filteredInventors = inventors.filter(function (inventor) {
      if (inventor.year > 1011 && inventor.year < 1300) {
        return true;
      }
    });

    // console.table(filteredInventorsShort);
    // console.table(filteredInventors);


    // MAP

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    const newarray = inventors.map(x => `${x.first} ${x.last}`)
    // console.log(newarray);




    // returns a new array. CanNOT have a different length in comparison to original one. the length is the same as original one!


    const fullNamesShort = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

    const fullNames = inventors.map(function (inventor) {
      return `${inventor.first} ${inventor.last}`;
    })

    // console.table(fullNamesShort);
    // console.table(fullNames);

    function getProperty(arr, param1) {
      return arr.map(x => x[param1]);
    }
    const getName = getProperty(inventors, 'first')
    // console.log(getName)


    // get some of key-value pairs in obj

    const someOfFields = inventors.map(inventor => ({
      first: inventor.first,
      year: inventor.year
    }))

    console.log(someOfFields);


    // SORT

    //!!!! affects the source arr !!!!!!! Doesn't create a copy!!!!


    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest


    const byBithdate = inventors.sort((a, b) => {
      return a.year < b.year ? 1 : -1;
    })
    // console.log(byBithdate);


    // console.table(inventors)

    const orderedShort = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);  //!!!! affects the source arr of inventors !!!!!!!

    // console.table(inventors);

    const ordered = inventors.sort(function (a, b) {
      if (a.year > b.year) {
        return 1
      }
      return -1
    })

    // console.table(orderedShort);
    // console.table(ordered);

    function sortByPropertyValue(arr, property) {
      return arr.sort((a, b) => {
        return a[property] < b[property] ? -1 : 1;
      })
    }

    const sortByLastName = sortByPropertyValue(inventors, "last");
    // console.table(sortByLastName);


    // REDUCE

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    const totalYearsShorter = inventors.reduce((sum, inventor) => (sum + (inventor.passed - inventor.year)), 0);

    const totalYearsShort = inventors.reduce((sum, inventor) => {
      return sum + (inventor.passed - inventor.year);
    }, 0);

    const totalYears = function (inventors) {
      let sum = 0;
      for (let i = 0; i < inventors.length; i++) {
        sum += inventors[i].passed - inventors[i].year;
      }
      return sum;
    }

    // console.log(totalYearsShort);
    // console.log(totalYearsShorter);
    // console.log(totalYears(inventors));




    // 5. 1.Sort the inventors by years lived and 2.ADD AGE PROPERTY TO EACH ONE


    // const sortedByYears = inventors.sort((a, b) => {
    //   const aYears = a.passed - a.year;
    //   const bYears = b.passed - b.year;
    //   return aYears < bYears ? 1 : -1;
    // })
    // console.log(sortedByYears);


    ////// function to add property to each item in obj and sort them with that property

    function addNewProperty(arr, property1, property2) {

      // we can do property addition this way
      for (item of arr) { item[property1] = item.passed - item.year; }

      // or this way
      arr.map(item => ({ ...item }, item[property2] = `${item.first}  ${item.last}`));


      return arr.sort((a, b) => {      // sorting with added property1
        return a[property1] < b[property1] ? -1 : 1;
      })
    }
    const test = addNewProperty(inventors, 'years', 'full name');
    console.table(test);

    // ---------
    // 1.
    // Sort the inventors by years lived

    function getYearsOfLiving(person) {  // Declaring function to calculate age
      return person.passed - person.year;
    }


    const yearsLived = inventors.sort(function (a, b) {   // Sorting arr using calculate function
      return (getYearsOfLiving(a) > getYearsOfLiving(b)) ? 1 : -1;
    })

    // console.table(yearsLived);

    // 2.
    // Adding property to each item in arr:


    function addProperty(items, propertyName) {
      return items.map(item => ({ ...item, [propertyName]: getYearsOfLiving(item) }));  // !!!ADD AGE PROPERTY TO EACH ONE (calculating function is used here)
    }


    const inventorsYearsField = addProperty(inventors, 'age');  // adding property to each one

    // console.table(inventorsYearsField);

    const sortedInv = inventorsYearsField.sort((a, b) => (a.age > b.age) ? 1 : -1)  // sorting arr with added property

    // console.table(sortedInv);

    // ---------



    // another way to do that (without adding property)

    const oldestShort = inventors.sort((a, b) => {
      const older = a.passed - a.year;
      const younger = b.passed - b.year;
      return (older > younger) ? 1 : -1;
    })

    const oldest = inventors.sort(function (a, b) {
      const older = a.passed - a.year;
      const younger = b.passed - b.year;
      if (older > younger) {
        return -1
      }
      return 1;
    })

    // console.table(oldestShort);
    // console.table(oldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const category = document.querySelector('.mw-category'); // get .mw-category on page
    // const links = category.querySelectorAll("a");  // get all links in that category
    // const linksArr = Array.from(links);  // get an array from links node list
    // const linksArr2 = [...links]; // another approach (method) to get an array from links node list
    // const de = linksArr2.map(item => item.textContent).filter(filteredItem => filteredItem.includes('de')); // mapping arr to get only items with some text within, and then filtering that new arr after mapping to get only items contain 'de';
    // console.table(de);


    // 7. sort Exercise
    // Sort the people alphabetically by last name


    // My approach without watching:

    const sortedPeople = people.sort((a, b) => {

      function makePartOfString(item) {
        return item.substr((item.indexOf(`,`) + 2), item.length)  // get the lastname of a person
      }

      const partOfString1 = makePartOfString(a);  // get the lastname of a
      const partOfString2 = makePartOfString(b);  // get the lastname of b


      return (partOfString1 > partOfString2) ? 1 : -1; // compare a.lastname and b.lastname and return boolean
    })

    // console.table(sortedPeople);





    const alpha = people.sort((a, b) => {

      // approach ONE: 
      // (my after watching)

      // const aChanged = a.split(', ');  // splitting every item of two words in one arr like ["Bevan", "Aneurin"]
      // const bChanged = b.split(', ');
      // return aChanged[1] > bChanged[1] ? 1 : -1; // comparing second items [1]  in each arr and returning boolean


      // approach TWO:

      const [aFirst, aLast] = a.split(', ');  // making arr of two variables aFirst, aLast and then splitting every item of two words in one arr like ["Bevan", "Aneurin"] and adding values from arr to variables aFirst and aLast
      // console.log({aFirst}, {aLast});
      const [bFirst, bLast] = b.split(', ');
      return aLast > bLast ? 1 : -1; // comparing second items in each arr and returning boolean

    });
    // console.table(alpha);



    // 8. Reduce Exercise (count items)


    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

    const data2 = ['car with 3 wheels', 'car with 3 wheels', 'car', 'car', 'car', 'car', 'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car with 3 wheels', 'van', 'bike', 'car', 'walk', 'bike', 'bike', 'bike', 'car with 3 wheels', 'van', 'car with 3 wheels', 'truck'];



    const newData = data.reduce(function (obj, item) {

      if (!obj[item]) {    //  2. Check if there instance in blank object
        obj[item] = 0;     // if not, create a property with new instance and assign 0 to the value;
      }

      obj[item]++;         // 3. if yes, increment value of that property in 1;

      return obj           // 4. return the outcoming object with saved property - value pairs
    }, {});           // 1. Create a blank object for keeping new information

    // console.log(newData);




    // same thing but with useful function to count instances for any arr

    const instanced = function (arr) {
      return arr.reduce((instSum, item) => {
        if (!instSum[item]) {
          instSum[item] = 0;
        }
        instSum[item]++;
        return instSum;
      }, {});
    }

    console.log(instanced(data2));


    // SHORT WAY TO COUNT ITEMS !!!!!!

    const instanced2 = (arr) => {
      return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;  
        return acc
      }, {})
    }

    console.log(instanced2(data2));






    // the same with forEach

    function sumInstances(arr) {
      const sumObj = {};

      arr.forEach(element => {

        if (!sumObj[element]) {
          sumObj[element] = 0;
        }

        sumObj[element]++;

      });

      return sumObj;
    }

    // console.log(sumInstances(data));
