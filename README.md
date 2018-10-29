# Spring Boot with SpringData Neo4J
Application to add user in social media

## Version used
- Spring Boot - 1.5.14.RELEASE
- Neo4J Bolt Driver - 2.1.1

## REST endpoint
- `/rest/neo4j/user` - returns all users and their relationships (movies)

## Neo4J 
- Docker command to bring up Neo4J server
```
docker run --publish=7474:7474 --publish=7687:7687 neo4j:3.0
```
- Neo4J Browser URL
```
http://localhost:7474/browser
```

## Cypher Queries for Neo4J
- Creation of User nodes:

```

```
- Adding new relationship

```
MATCH (a:User),(b:User)
WHERE a.name ='gautham' AND b.name = 'anmol'
CREATE  (a)-[r:FRIEND_OF]->(b)
CREATE  (a)<-[f:FRIEND_OF]-(b);
```
