## Setup a gatsby wordpress site

This docker compose will deploy a wordpress 5 setup with db. And a Gatsby file generator toghter.

You will use wordpress as a CMS till and make your pages there.

Then the gatsby static will read from the wordpress api and create new pages and post as static pages.


It will also load the content from wordpress into a grafql server.


### Get it

Clone the github repo


### Fix npm deps

First you need to get all the node compenets that are not in the github repo


```
docker-compose run gatsby npm install
```

### Start it 

```
docker-compose up
```


### Login to wordpress

In your /etc/host add the following

```
127.0.0.1	wordpress5
```


http://wordpress5:8000 login with 
mattias/password

#### Database

The first time a seed work is run to add data to the sql server.
The sql is find in /seed folder.

When you have started your wordpress and make changes rename the file name wordpress.sql to soemthing other so the seed file will nor write over you data.




### Time to start gatsby

You can start gatsby at run but have not make so it rescans the wordpress. No it only runs at start to fetch the data from wordpress.

So are you adding data to wordpress you need to start gatsby inside the docker image to get the new data.


run the followigng 


```
docker ps 

docker exec -it DOCKER ID sh

npm run develop -- --host=0.0.0.0
```

If you are working with gatsby and the design you can use the command in the dockerfile 


```
     command: tail -f /etc/fstab


     command: npm run develop -- --host=0.0.0.0

```



