--Write queries to find the answers below:

    --1. What are all projects that use HTML?
SELECT * FROM project
    INNER JOIN project_uses_tech
    ON project.id = project_uses_tech.project_id
    INNER JOIN tech
    ON project_uses_tech.tech_id = tech.id
    WHERE tech.name = 'HTML'
;
    --2. What are all technologies used by the Personal Website?
SELECT DISTINCT(name) FROM tech
    INNER JOIN project_uses_tech
    ON project_uses_tech.tech_id = tech.id
;
    --3. Perform a left outer join from the tech table to the project_uses_tech 
    -- table - which techs has no associated project?
SELECT * FROM tech
    LEFT OUTER JOIN project_uses_tech
    ON project_uses_tech.tech_id = tech.id
    WHERE project_uses_tech.project_id IS NULL
;
    --4. Based on the previous query, get the count of the number of techs used by each project.
SELECT count(tech.id), (tech.name) FROM tech
    INNER JOIN project_uses_tech
    ON project_uses_tech.tech_id = tech.id
    GROUP BY tech.name
;
    --5. Perform a left outer join from the project table to the project_users_tech 
    -- table - which projects has no associated tech?
SELECT * FROM project
    LEFT OUTER JOIN project_uses_tech
    ON project_uses_tech.project_id = project.id
    WHERE project_uses_tech.project_id IS NULL
;
    --6. Based on the previous query, get the count of the number of projects that use each tech.
SELECT count(project.id), (project.name) FROM project
    INNER JOIN project_uses_tech
    ON project_uses_tech.project_id = project.id
    GROUP BY project.name
;
    --7. List all projects along with each technology used by it. You will need to do a three-way join.
SELECT * FROM project
    INNER JOIN project_uses_tech
    ON project.id = project_uses_tech.project_id
    INNER JOIN tech
    ON project_uses_tech.tech_id = tech.id
    ORDER BY project.id
;
    --8. List all the distinct techs that are used by at least one project.
SELECT DISTINCT(name) FROM tech
    INNER JOIN project_uses_tech
    ON project_uses_tech.tech_id = tech.id
;
    --9. List all the distinct techs that are not used by any projects.
SELECT DISTINCT(name) FROM tech
    LEFT OUTER JOIN project_uses_tech
    ON project_uses_tech.tech_id = tech.id
    WHERE project_uses_tech.tech_id IS NULL
;
    --10. List all the distinct projects that use at least one tech.
SELECT DISTINCT(project.name) FROM project
    INNER JOIN project_uses_tech
    ON project_uses_tech.project_id = project.id
;
    --11. List all the distinct projects that use no tech.
SELECT DISTINCT(project.name) FROM project
    LEFT OUTER JOIN project_uses_tech
    ON project_uses_tech.project_id = project.id
    WHERE project_uses_tech.project_id IS NULL
;
    --12. Order the projects by how many tech it uses.
SELECT count(project.id), (project.name) FROM project
    INNER JOIN project_uses_tech
    ON project_uses_tech.project_id = project.id
    GROUP BY project.name
    ORDER BY COUNT DESC
;
    --13. Order the tech by how many projects use it.
SELECT count(tech.id), (tech.name) FROM tech
    INNER JOIN project_uses_tech
    ON project_uses_tech.project_id = tech.id
    GROUP BY tech.name
    ORDER BY COUNT DESC
;