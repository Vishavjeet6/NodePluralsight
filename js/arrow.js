this.id = 'exports';
console.log(this);

const tObj = {
    func1: function () {
        console.log('func1', this);
    },
    func2: () => {
        console.log('func2', this);
    },
};

tObj.func1();
tObj.func2();