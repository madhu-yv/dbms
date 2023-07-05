
const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const app = express()

const encoder = bodyparser.urlencoded( )
app.use(bodyparser.json());



const con = mysql.createConnection({host:"localhost",user:"root",password:"",database:"finance"})

con.connect(function(error){    
    if(error) 
    throw error;
    else console.log("Connected to database")
});


// app.get("/disp",(req,res)=>{
//     res.sendFile(__dirname+"/display.html")
// })



// app.get("/display",function(req,res){
//     var sql = "select * from tele";
//     con.query(sql,function(err,result){
//         console.log(result);
//         if (err) throw err;    
//         if(result.length>0)
//         {
//             console.log(result.length)
//             res.json(result);
//             console.log("Record selected");   
//         }
//         else{
//             res.send("No events found");
//         }
//         res.end();
//     })
// })

// app.get("/dis",(req,res)=>{
//     res.sendFile(__dirname+"/")
// })

// app.get("/disp",(req,res)=>{
//     res.sendFile(__dirname+"/bill.html")
// })


app.get("/pay",(req,res)=>{
    res.sendFile(__dirname+"/pay.html")
})

app.get("/update",(req,res)=>{
    res.sendFile(__dirname+"/update.html")
})

// app.get("/delete",(req,res)=>{
//     res.sendFile(__dirname+"/delete.html")
// })

// app.get("/insert",(req,res)=>{
//     res.sendFile(__dirname+"/getData.html")
// })



// app.post("/pay",(req,res)=>{
//     console.log("ko")
//     var z1 = req.body.t1
//     var z2 = req.body.t2
//     console.log("zo")
//     console.log(z1)
//     console.log("lo")
//     var sql = "Update tele set ph="+con.escape(z2)+" where ph="+con.escape(z1);
//     con.query(sql,function(err,result){
//         console.log(result);
//         if (err) throw err;
//         if(result.changedRows>0)
//         {
//             console.log(result.length)
//             res.json(result);
//             console.log("Record selected");   
//         }
//         else{
//             res.send("No events found");
//         }
//         res.end();
//     })
// })



// app.post("/del",(req,res)=>{
//     console.log("ko")
//     var z1 = req.body.t1
//     console.log("zo")
//     console.log(z1)
//     console.log("lo")
//     var sql = "Delete from tele where ph="+con.escape(z1);
//     con.query(sql,function(err,result){
//         console.log(result);
//         if (err) throw err;
//         if(result.changedRows>0)
//         {
//             console.log(result.length)
//             res.json(result);
//             console.log("Record selected");   
//         }
//         else{
//             res.send("No events found");
//         }
//         res.end();
//     })
// })


// app.post("/billstatus",(req,res)=>{
//     console.log("ko")
//     var z1 = req.body.t1
//     console.log("zo")
//     console.log(z1)
//     console.log("lo")
//     var sql = "select * from tele where ph="+con.escape(z1);
//     con.query(sql,function(err,result){
//         console.log(result);
//         if (err) throw err;
//         if(result.length>0)
//         {
//             res.json(result)  
//         }
//         else{
//             res.send("No events found");
//         }
//         res.end();
//     })
// })


// app.post("/get",encoder,(req,res)=>{
//     let t1 = req.body.t1;
//     let t2 = req.body.t2;
//     let t3 = req.body.t3;
//     let t4 = req.body.t4;

//     var sql = "Insert into tele (name,ph,dept,desig) VALUES("+con.escape(t1)+","+con.escape(t2)+","+con.escape(t3)+","+con.escape(t4)+")"
//     con.query(sql,function(err,result){
//         console.log(result);
//         if (err) throw err;
//         if(result.affectedRows>0)
//         {
//             console.log(result.length)
//             res.json(result);
//             console.log("Record selected");   
//         }
//         else{
//             res.send("No events found");
//         }
//         res.end();
//     })
// })


app.post("/get",encoder,(req,res)=>{
    a=req.body.t1;
    b=req.body.t2;
    c=req.body.t3;


    var sql = "insert into finance (name,ph,amount) values("+con.escape(a)+","+con.escape(b)+","+con.escape(c)+")" 

        con.query(sql,function(err,result){
        console.log(result);
        if (err) throw err;
        if(result.affectedRows>0)
        {
            console.log(result.length)
            res.redirect("/display")
            console.log("Record selected");   
        }
        else{
            res.send("No events found");
        }
        res.end();
    })
})




app.post("/disp",(req,res)=>{
    console.log("ko")
    var z1 = req.body.t1
    console.log("zo")
    console.log(z1)
    console.log("lo")
    var sql = "select * from finance";
    con.query(sql,function(err,result){
        console.log(result);
        if (err) throw err;
        if(result.length>0)
        {
            res.json(result);
            console.log("Record selected");   
        }
        else{
            res.send("No events found");
        }
        res.end();
    })
})


app.post("/del",(req,res)=>{
    var z1 = req.body.t1
    var sql = "Delete from finance where ph="+con.escape(z1);
    con.query(sql,function(err,result){
        console.log(result);
        if (err) throw err;
        if(result.changedRows>0)
        {
            console.log(result.length)
            res.json(result);
            console.log("Record selected");   
        }
        else{
            res.send("No events found");
        }
        res.end();
    })
})

app.post("/sort",(req,res)=>{
    var z1 = req.body.t1
    var z2 = req.body.t2
    var sql = "select * from finance where amount>="+con.escape(z1)+" and amount<="+con.escape(z2);
    con.query(sql,function(err,result){
        console.log(result);
        if (err) throw err;
        if(result.length>0)
        {
            console.log(result.length)
            res.json(result);
            console.log("Record selected");   
        }
        else{
            res.send("No events found");
        }
        res.end();
    })
})

app.post('/upd',encoder,(req,res)=>{
    b=req.body.t2;
    c=req.body.t3;


    var sql = "update finance set amount=amount-"+con.escape(c)+" where ph="+con.escape(b) 

        con.query(sql,function(err,result){
        console.log(result);
        if (err) throw err;
        if(result.affectedRows>0)
        {
            console.log(result.length)
            res.redirect("/display")
            console.log("Record selected");   
        }
        else{
            res.send("No events found");
        }
        res.end();
    })
})



app.get("/dsort",(req,res)=>{
    res.sendFile(__dirname+"/sort.html")
}
)

app.get("/display",(req,res)=>{
    res.sendFile(__dirname+"/display.html")
})

app.get("/ins",(req,res)=>{
    res.sendFile(__dirname+"/getData.html")
})

app.get("/delete",(req,res)=>{
    res.sendFile(__dirname+"/repay.html")
})

app.listen(2000,()=>{
    console.log("Listening port : 2000")
});


