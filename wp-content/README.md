# Wordpress Developer base 
This is the base repo for SAM wordpress deploy.
All new wordpress are sarted with this base as wp-content


## Starting the developer setup

**First install docker and docker-compose**

Start the setup with 

```
docker-compose up
```


This will bring up the developer docker images and setup the wordpress for you.
You can now wisit your wordpress on your local computer at


### For wordpress 4

**http://localhost**

**http://localhost/wp-admin** (admin/admin)


### For wordpress 5

**http://localhost:81**

**http://localhost:81/wp-admin** (myadmin/admin)


If you need a nother port modify the docker-compose.yaml and change port 80 to other port.
You can also change so that wordpress 5 is running on port 80 and 443

```
     ports:
       - "80:8000"
       - "443":8443

```


### HTTPS
The docker will serve a page under https://localhost for wordpress4 and https://localhost:444 for wordpress 5. The certificate is self signed and need to be accepted.


### DB Seed
When you run docker-compose the sql in the file seed/wordpress.sql will be seeden into the SQL server

IMPORTANT the dbseed will run everytime you **start the contianer** and this will RESET you databas.
To disable remove the file seed/wordpress.sql

Sometimes the seed will time out id the db is slow at starting but then stop and start the docker-compose again.

You will see the followig output if successfull

```
dbseed_1      | Slep so db can start
dbseed_1      | Seeding database from file seed/wordpress.sql
dbseed_1      | mysql: [Warning] Using a password on the command line interface can be insecure.
dbseed_1      | mysql: [Warning] Using a password on the command line interface can be insecure.
dbseed_1      | Tables_in_wordpress
dbseed_1      | wp5_commentmeta
dbseed_1      | wp5_comments
dbseed_1      | wp5_links
dbseed_1      | wp5_options
dbseed_1      | wp5_postmeta
dbseed_1      | wp5_posts
dbseed_1      | wp5_term_relationships
dbseed_1      | wp5_term_taxonomy
dbseed_1      | wp5_termmeta
dbseed_1      | wp5_terms
dbseed_1      | wp5_usermeta
dbseed_1      | wp5_users
dbseed_1      | wp_commentmeta
dbseed_1      | wp_comments
dbseed_1      | wp_links
dbseed_1      | wp_options
dbseed_1      | wp_postmeta
dbseed_1      | wp_posts
dbseed_1      | wp_term_relationships
dbseed_1      | wp_term_taxonomy
dbseed_1      | wp_termmeta
dbseed_1      | wp_terms
dbseed_1      | wp_usermeta
dbseed_1      | wp_users
basewp_dbseed_1 exited with code 0

``` 



### Phpmyadmin
phpmyadmin is a database tool included and can be found on **http://localhost:82** from here you can performe database actions to the database.

## Push your changes to the online Wordpress

When updating the online wordpress simply push your changes to github master barnch


```
git add .
git commit -a -m "Update"
git push origin master
```


**YOUR DB CHANGES WILL NOT BE PUSHED AND MUST BE APPLIED MANUALL**


### Get the online version

Backup of the corrent running version online are saved into the branch fromserver.
Simply check out that bransh and start the docker compose to get the current state of your wordpress.

### Migrate DB

when migrate the databse you need to update the wordpress siteurl. Read here how you update your site url

https://codex.wordpress.org/Changing_The_Site_URL this is best done in the SQL part and with the followinf phpmyadmin tool after the database.

** Move to devloping **

```
- Dump your old database and store it in a sql file in seed/wordpress.sql
- Startup the service with docker-compose up
- Login into phpmyadmin and change siteurl to http://localhost
- browse to your wordpress
```



** Move to hosting **

```
- Go into phpmyadmin and change siteurl to your site name example myblog.apps.example.com
- In phpmyadmin do a database dump of your database.
- Go to your hosted site and import your database dump
```