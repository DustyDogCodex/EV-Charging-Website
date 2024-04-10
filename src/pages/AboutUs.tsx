import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

/* styling for MUI accordion containing FAQs */
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

/* styling and data for bsaic MUI table */
function createData(
  name: string,
  L1: string,
  L2: string,
  DCFC: string,
) {
  return { name, L1, L2, DCFC }
}

/* data rows for table */
const rows = [
  createData('Cost per Full Charge', '$ ($1.20 - $13)', '$$ ($6 - $10)', '$$$ ($10 to $30)'),
  createData('Speed', 'Slow', 'Medium', 'Fast'),
  createData('Primary Location', 'Residential', 'Residential, Public, Work', 'Public')
]


function AboutUs() {
    const [ expanded, setExpanded ] = useState<string | false>('panel1')

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false)
        }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <div className="container my-28">
                {/* Mission Statement */}
                <div>
                    <h1 className='text-6xl text-center mb-10'>Who We Are</h1>
                    <p className='text-center text-xl'>At GoSpace, our mission is to revolutionize electric vehicle charging infrastructure by creating convenient and accessible 'GoSpaces' where customers can effortlessly charge their cars. We are committed to accelerating the transition to sustainable transportation by providing innovative, reliable, and user-friendly charging solutions. Through our dedication to customer satisfaction, environmental stewardship, and technological advancement, we aim to empower individuals and communities to embrace electric mobility and contribute to a cleaner, greener future for all.</p>
                </div>


                {/* Our Management Team section */}
                <div className='my-5'>
                    <h1 className='text-center text-4xl font-semibold'>Our Team</h1>

                    {/* Team bios and pictures */}
                    <div className='flex items-center justify-around'>
                        <div className='flex flex-col items-center justify-center mx-2'>
                            <img 
                                src="/assets/ProfileImage1.jpg" 
                                alt="Headshot" 
                                className='h-60 w-60 rounded-full object-center'
                            />
                            <span className='font-bold text-base'>David Beckham</span>
                            <span className='text-sm italic my-5'>CEO, Local Legend</span>

                            <p className='text-center text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sunt officia rerum totam accusamus a ex vel repellat voluptates expedita eaque, fuga, eveniet perferendis? Ratione debitis consequatur unde ad officiis.</p>
                        </div>

                        <div className='flex flex-col items-center justify-center mx-2'>
                            <img 
                                src="/assets/ProfileImage2.jpg" 
                                alt="Headshot" 
                                className='h-60 w-60 rounded-full object-center'
                            />
                            <span className='font-bold text-base'>Wayne Rooney</span>
                            <span className='text-sm italic my-5'>Fleet Chief, Local Angry Man</span>

                            <p className='text-center text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sunt officia rerum totam accusamus a ex vel repellat voluptates expedita eaque, fuga, eveniet perferendis? Ratione debitis consequatur unde ad officiis.</p>
                        </div>
                    </div>
                </div>

                {/* achievements/laurels section */}
                <div>
                    <h2 className='text-center text-4xl'>Our Achievements</h2>

                    <h4 className='text-xl font-bold mb-3'>NEVI Participant</h4>
                    <p>
                        The <strong><a href='https://www.fhwa.dot.gov/bipartisan-infrastructure-law/nevi_formula_program.cfm' target='_blank' className='underline cursor-pointer'>National Electric Vehicle Infrastructure (NEVI) Formula Program</a></strong> is a federal initiative established by the Bipartisan Infrastructure Law. Its purpose is to provide nearly $5 billion over 5 years to help states create a network of 500,000 electric vehicle charging stations along federally designated Alternative Fuel Corridors. These charging stations will facilitate the adoption of electric vehicles (EVs) and contribute to reducing greenhouse gas emissions.
                    </p>
                    <p className='mt-3'>
                        As an electric vehicle charging infrastructure company, our participation in the NEVI program is indeed fortunate. By leveraging this funding, GoSpace plays a crucial role in building out the charging infrastructure, contributing to the nationwide electrification of the fleet. This opportunity allows us to be at the forefront of sustainable transportation, supporting cleaner energy and a greener future for our nation. 🚗⚡🌿
                    </p>

                    <h4 className='text-xl font-bold my-3'>ISN Certification</h4>
                    <p>
                        At GoSpace, we pride ourselves on our commitment to excellence and safety in every aspect of our operations. As a proud recipient of <strong><a href='https://www.isnetworld.com/en/' target='_blank' className='underline cursor-pointer'>ISN Certification</a></strong>, we uphold the highest standards of quality, integrity, and compliance in all our endeavors. Our dedication to maintaining ISN certification reflects our unwavering dedication to creating a workplace that prioritizes the well-being of our employees, clients, and partners alike.
                    </p>
                    <p className='mt-3'>
                        With our ISN certification, we demonstrate our proactive approach to risk management and regulatory compliance. This certification serves as a testament to our rigorous safety protocols, comprehensive training programs, and ongoing commitment to continuous improvement. By adhering to the stringent requirements set forth by ISNetworld, we ensure that our operations meet and exceed industry standards, providing peace of mind to all stakeholders involved. Our commitment to safety and compliance is not just a requirement; it's a core value that guides our daily operations and decision-making processes. Whether it's in the field, the office, or the boardroom, we remain steadfast in our mission to deliver superior service while upholding the highest standards of safety and integrity.
                    </p>
                </div>

                {/* FAQ's section/accordion */}
                <div>
                    <h1 className='text-3xl my-5 text-center'>Frequently Asked Questions</h1>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>What is a GoSpace?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className='mb-3'>
                                    Creating a <strong>'GoSpace'</strong> is the unique idea of providing useful automobile amenities to drivers in a dedicated, easy to access parking space. Since its inception, drivers have enjoyed the convenience and effective use of GoSpaces for EV charging and tire pressure calibration at locations throughout the United States.
                                </p>

                                <p>
                                    We are committed to providing a completely turnkey solution to our customers, from site selection, consultation, design, procurement, installation and unparalleled service and support.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
      
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>Why do I need a GoSpace?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className='mb-3'>
                                    According to PwC, the number of EVs in the U.S. is projected to reach 27 million by 2030 and escalate to 92 million by 2040. Additionally, consultancy group Navigant anticipates charger demand expanding at 50% compounded annual growth. 
                                </p>

                                <p className='mb-3'>
                                    This makes EV charging stations not a luxury, but a neccessity for commercial real estate locations in the near future. The rapid growth of the EV industry will demand significant new charging infrastructure in <strong>multifamily</strong>, <strong>office</strong>, <strong>retail</strong>, and <strong>hospitality</strong> locations. 
                                </p>

                                <p className='mb-3'>
                                    With EV adoption projected to grow <strong>25%+ annually</strong>, charging will be considered a necessity as its absence will be a deal-breaker for most customers when they choose where to shop, dine, or live.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>What is the difference between Level 1, Level 2 and DC Fast Chargers?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className='mb-3'>
                                    Electric vehicle (EV) chargers are characterized by “levels” rather than gasoline grades like regular, plus or premium. The levels describe how quickly a charger will recharge an EV’s battery. In general, chargers are defined by the number of kilowatts (kW) they output. Each kilowatt-hour (kWh) received by a standard passenger-sized EV equates to about 4 miles of driving range. The higher the output from the charger, the faster the EV battery will recharge.
                                </p>

                                <p className='mb-3'>
                                    <strong>Level 1</strong> is the slowest type of charging equipment. L1 chargers plug directly into a standard 120 volt (V) AC outlet supplying an average power output of 1.3 kW to 2.4 kW. This power output is equivalent to 3-5 miles of EV range per hour. An overnight charge will add 30-50 miles of range, which is sufficient for many commuters. A full charge for an empty EV battery can take over 24 hours.
                                </p>

                                <p className='mb-3'>
                                    <strong>Level 2</strong> chargers operate at 208-240 V and output anywhere from 3 kW to 19 kW of AC power. This power output translates to 18-28 miles of range per hour. An average EV can be fully charged in 8 hours or less. FreeWire’s Mobi EV Charger is a mobile equivalent of an L2 charger with a power output of 5.5 kW per port and it has 2 ports that can be used simultaneously. Some L2 chargers can supply more power than what EVs can take, so results will vary depending on the charger and EV combination.
                                </p>

                                <p className='mb-3'>
                                    <strong>Direct Current Fast Chargers</strong> are the fastest chargers available with a maximum output of 350 kW. DCFCs are designed to fill an EV battery to 80% in 20-40 minutes, and 100% in 60-90 minutes. For example, FreeWire’s Boost Charger™ can charge a single EV up to 150 kW, delivering over 100 miles of range in 15 minutes. The maximum charge rate is often limited by the EV acceptance rate. While many EVs currently on the market charge at a maximum 50 kW, there are newer EV models capable of charging over 200 kW including the Porsche Taycan® and some Tesla models. There are very few public charging stations capable of actually delivering the highest level of power accepted by top-of-the-line EVs today.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>What are the costs for charging an EV with the different chargers?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Charger Level</TableCell>
                                            <TableCell align="right">L1</TableCell>
                                            <TableCell align="right">L2</TableCell>
                                            <TableCell align="right">DCFC</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* mapping rows array into table body */}
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                
                                                <TableCell align="right">{row.L1}</TableCell>
                                                <TableCell align="right">{row.L2}</TableCell>
                                                <TableCell align="right">{row.DCFC}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
export default AboutUs