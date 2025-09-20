{
    // Assignment-01
    function formatString(input1: string, input2?: boolean) {
        if (input2) {
            const text = input1.toUpperCase();
            return text
        }
        else {
            const text = input1.toLowerCase();
            return text
        }
    }
    const res = formatString('Hello', false)
    // console.log(res);



    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

    function filterByRating(items: any) {
        const arrayOfObjects = items.filter((item: any): any => item.rating >= 4)
        console.log(arrayOfObjects);
    }
    // filterByRating(books)


    //  TODO: 3 number need to add


    class Vehical {
        private Make: string;
        private Year: number;

        constructor(Make: string, Year: number) {
            this.Year = Year;
            this.Make = Make
        }
        getInfo() {
            console.log(this.Make, this.Year);
        }
    }

    class Car extends Vehical {
        private Model: string;

        constructor(Make: string, Year: number, Model: string) {
            super(Make, Year),
                this.Model = Model
        }
        getModel() {
            console.log(this.Model);
        }
    }
    const myCar = new Car("Toyota", 2022, "Premio");
    // myCar.getInfo();   
    // myCar.getModel();  



    const processValue = (value: string | number): number => {

        if (typeof value === "string") {
            return value.length
        } else {
            return value * 2
        }
    }

    const result = processValue(5)
    // console.log(result);



    interface Product {
        name: string;
        price: number;
    }
    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        if (products.length !== 0) {
            const data = products.reduce((pre, curr) => pre.price > curr.price ? pre : curr)
            return data
        } else {
            return null
        }
    }

    const products = [
        { name: "Pen", price: 100 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    // console.log(products.length);
    const productList = getMostExpensiveProduct(products);
    //  console.log(productList); 


    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    const getDayType = (day: Day): string => {
        if (day === Day.Sunday) {
            return "Weekend"
        } else {
            return "Weekday"
        }
    }
    const dayName = getDayType(Day.Sunday)
    // console.log(dayName);


    const squareNumber = async (num: number): Promise<number> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num < 0) {
                    reject(new Error("Negative number not allowed"));
                } else {
                    resolve(num * num);
                }
            }, 1000);
        });
    }

    squareNumber(5)
    // .then(result => console.log("Square:", result))
    // .catch(error => console.error("Error:", error.message));


    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
         return ([] as T[]).concat(...arrays);
    }

   const concatenat = concatenateArrays(["a", "b"], ["c",'d']);      
    
    // console.log(concatenat);









    // 
}