A good data model:
- captures all the information the system needs
- captures only the information the system needs
- reflects reality
- is flexible, can evolve with the system
- guarantees data integrity w/o sacrificing performance and convenience
- is driven by the way the system uses the data

Data Model Components
---------------------
Entities => resources => table (rows)
Properties => Columns
Relationships = Foreign Keys

Workflow
--------
Identify the entities
Identify the properties for each entity
Identify the relations between entities

Tracks => Web, Android, iOS
Cohorts => web18, webpt2
Students => Mindy, Sean, Destiny

Queries Examples
----------------
select s.name as student, c.name from students as s inner join cohorts as c
on s.cohort_id = c.id
