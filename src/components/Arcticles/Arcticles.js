import React from 'react';
import styles from './Arcticles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        height:180,
        width:1000,
    },
});

function Articles() {
    const classes = useStyles();
    let cardDetails = [
        {
            style: styles.card,
            title: "COVID-19",
            description: "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.",
            link:"https://www.who.int/health-topics/coronavirus#tab=tab_1"
        },
        {
            style: styles.card,
            title: "COVID-19 Vaccine",
            description: "Vaccines save millions of lives each year. Vaccines work by training and preparing the body’s natural defences – the immune system – to recognize and fight off the viruses and bacteria they target. After vaccination, if the body is later exposed to those disease-causing germs, the body is immediately ready to destroy them, preventing illness.",
            link:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines"
        },
        {
            style: styles.card,
            title: "Oxford Research for COVID-19",
            description: "Researchers at the University of Oxford have launched a human challenge trial to look at what kind of immune response can stop people from becoming re-infected. They also want to see how the immune system reacts second time round. A human challenge trial in medical research is a carefully controlled study that involves purposefully infecting a subject with a pathogen or bug, in order to study the effects of that infection.",
            link:"https://www.research.ox.ac.uk/Area/coronavirus-research"
        },
        {
            style: styles.card,
            title: "How Covid-19 Affects Economy",
            description: "On March 11, 2020, the World Health Organization (WHO) characterized COVID-19 as a pandemic, pointing to over 3 million cases and 207,973 deaths in 213 countries and territories (1). The infection has not only become a public health crisis but has also affected the global economy. Significant economic impact has already occurred across the globe due to reduced productivity, loss of life, business closures, trade disruption.",
            link:"https://www.who.int/health-topics/coronavirus#tab=tab_1"
        },
    ];
    return (
        <div>{cardDetails.map((item, index) => {
            return (<div>
                <Card className={classes.root}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{item.title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">{item.description}</Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={item.link}>Learn More</Button>
                    </CardActions>
                </Card>
                <div style={{padding:'8px'}}/>
                </div>
            )
        })}
        </div>
    );
}

export default Articles;
