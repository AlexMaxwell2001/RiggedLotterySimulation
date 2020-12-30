const Lottery = require('../models/Lottery.model.js');

exports.root = (req, res) => {
	Lottery.find()
    .then(Lotto => {
        res.render('Lottery_view',{
            results: Lotto
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving Lottery Numbers."
        });
    });    
};
exports.create = (req, res) => 
{
	var ar =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47];
    for(var i=0;i<5000;i++)
    {
    	ar =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47];
    	var rand1= ar[Math.floor(Math.random() * ar.length)];
    	ar[rand1-1]=0;
    	var rand2= ar[Math.floor(Math.random() * ar.length)];
      	while(rand2==0) rand2= ar[Math.floor(Math.random() * ar.length)];
      	ar[rand2-1]=0;
      	var rand3= ar[Math.floor(Math.random() * ar.length)];
      	while(rand3==0) rand3= ar[Math.floor(Math.random() * ar.length)];
      	ar[rand3-1]=0;
      	var rand4= ar[Math.floor(Math.random() * ar.length)];
      	while(rand4==0) rand4= ar[Math.floor(Math.random() * ar.length)];
      	ar[rand4-1]=0;
      	var rand5= ar[Math.floor(Math.random() * ar.length)];
      	while(rand5==0) rand5= ar[Math.floor(Math.random() * ar.length)];
      	ar[rand5-1]=0;
      	var rand6= ar[Math.floor(Math.random() * ar.length)];
      	while(rand6==0) rand6= ar[Math.floor(Math.random() * ar.length)];
      	const Lotto = new Lottery({
		    Lottery1: rand1,
		    Lottery2: rand2,
		    Lottery3: rand3,
		    Lottery4: rand4,
		    Lottery5: rand5,
		    Lottery6: rand6
	    });
		Lotto.save()
		.then(data => {
			res.send(data);
		}).catch(err => {
			res.status(500).send({
			    message: err.message || "An error occurred while creating the Lottery simulation."
			});
		});
	}
};

exports.searchLottoNum1 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Lottery Number 1: "+search)
    Lottery.find({ Lottery1: new RegExp(search,"ig")})
    .then(Lotto => {
        res.render('Lottery_view',{
            results: Lotto
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving Lottery Number."
        });
    });
};

exports.searchLottoNum2 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Lottery Number 2: "+search)
    Lottery.find({ Lottery2: new RegExp(search,"ig")})
    .then(Lotto => {
        res.render('Lottery_view',{
            results: Lotto
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving Lottery Number."
        });
    });
};

exports.searchLottoNum3 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Lottery Number 3: "+search)
    Lottery.find({ Lottery3: new RegExp(search,"ig")})
    .then(Lotto => {
        res.render('Lottery_view',{
            results: Lotto
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving Lottery Number."
        });
    });
};

exports.searchLottoNum4 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Lottery Number 4: "+search)
    Lottery.find({ Lottery4: new RegExp(search,"ig")})
    .then(Lotto => {
        res.render('Lottery_view',{
            results: Lotto
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving Lottery Number."
        });
    });
};

exports.searchLottoNum5 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Lottery Number 5: "+search)
    Lottery.find({ Lottery5: new RegExp(search,"ig")})
    .then(Lotto => {
        res.render('Lottery_view',{
            results: Lotto
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving Lottery Number."
        });
    });
};


exports.searchLottoNum6 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Lottery Number 6: "+search)
    Lottery.find({ Lottery6: new RegExp(search,"ig")})
    .then(Lotto => {
        res.render('Lottery_view',{
            results: Lotto
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving Lottery Number."
        });
    });
};

