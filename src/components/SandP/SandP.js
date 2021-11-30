import React from 'react';
import styles from './SandP.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        width: 450,
        height: 750,
    },
    title: {
        fontSize: 24,
    },
});

function SandP() {
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2" className={classes.title} gutterBottom>Precautions</Typography>
                        <Typography variant="body2" component="p">Protect yourself and others around you by knowing the facts and taking appropriate precautions.
                        Follow advice provided by your local health authority.
                            <br></br>To prevent the spread of COVID-19:
                            <ul>
                                <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
                                <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
                                <li>Wear a mask when physical distancing is not possible.</li>
                                <li>Don’t touch your eyes, nose or mouth.</li>
                                <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
                                <li>Stay home if you feel unwell.</li>
                                <li>If you have a fever, cough and difficulty breathing, seek medical attention.</li>
                            </ul>
                            Calling in advance allows your healthcare provider to quickly direct you to the right health facility.
                            <br></br>
                            This protects you, and prevents the spread of viruses and other infections.
                            <br></br>
                            <br></br>
                            Masks can help prevent the spread of the virus from the person wearing the mask to others. 
                            Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene. 
                            Follow the advice provided by your local health authority.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">Learn More</Button>
                    </CardActions>
                </Card>
            </div><div style={{ padding: '35px' }}></div>
            <div>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2" className={classes.title} gutterBottom>Symptoms</Typography>
                        <Typography variant="body2" component="p">COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.
                            <br></br>
                            Most common symptoms:
                            <ul>
                                <li>fever</li>
                                <li>dry cough</li>
                                <li>tiredness</li>
                            </ul>
                            Less common symptoms:
                            <ul>
                                <li>aches and pains</li>
                                <li>sore throat</li>
                                <li>diarrhoea</li>
                                <li>conjunctivitis</li>
                                <li>headache</li>
                                <li>loss of taste or smell</li>
                                <li>a rash on skin, or discolouration of fingers or toes</li>
                            </ul>
                            Serious symptoms:
                            <ul>
                                <li>difficulty breathing or shortness of breath</li>
                                <li>chest pain or pressure</li>
                                <li>loss of speech or movement</li>
                            </ul>
                            <br></br>
                            Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.
                            People with mild symptoms who are otherwise healthy should manage their symptoms at home.
                            On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.
                            </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default SandP;
