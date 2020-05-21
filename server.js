const express=require('express')
const next=require('next')
const dev=process.env.NODE_ENV !=='production' 
const app=next({dev})
const handle =app.getRequestHandler();
const port=3000
app.prepare().then(()=>{
	const server=express();
	

server.get('/profile/:name',(req,res)=>{
	app.render(req,res,'/profile',{name:req.params.name})
})


	server.get('*',(req,res)=>{
	


	return handle(req,res)
	}

		)

	server.listen(port,err=>{
		if(err) 
			{console.log("ss",err)
			}
		console.log('sss 3000',port)

	})
}).catch(ex=>{

	console.error(ex.stack)
	process.exit(1)
})

