import faqsModel from '../models/faqs.js';

const faqsController = {};

//select
faqsController.getAllFaqs = async (req, res) => {
  try {
    const faqs = await faqsModel.find();
    res.status(200).json(faqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    res.status(500).json({ message: 'Internal server error' });
    console.log(error+ 'Error fetching FAQs');
  }
}

//insert

faqsController.createFaq = async (req, res) => {
    const { Questions, Answer, Level, isActive } = req.body;
    try {

        if (!Questions || !Answer || !Level || !isActive) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (Level > 5 || Level < 1) {
            return res.status(400).json({ message: 'Level must be between 1 and 5' });
        }
        const newFaq = new faqsModel({
            Questions,
            Answer,
            Level,
            isActive
        });
        await newFaq.save();

        res.status(201).json({ message: 'FAQ created successfully', faq: newFaq });
        
    } catch (error) {
        console.error('Error creating FAQ:', error);
        res.status(400).json({ message: 'Internal server error' });
    }
    }

//update

faqsController.updateFaq = async (req, res) => {
    try {

        const {Questions, Answer, Level, isActive } = req.body;
        if (Level > 5 || Level < 1) {
            return res.status(400).json({ message: 'Level must be between 1 and 5' });
        }
        const updatedFaq = await faqsModel.findByIdAndUpdate(
            req.params.id,
            { Questions, Answer, Level, isActive },
            { new: true }
        );
        if (!updatedFaq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }
        res.status(200).json({ message: 'FAQ updated successfully' });
        
    } catch (error) {
        console.error('Error updating FAQ:', error);
        res.status(400).json({ message: 'Internal server error' });
    }

}

//delete

faqsController.deleteFaq = async (req, res) => {
    try {
        const deletedFaq = await faqsModel.findByIdAndDelete(req.params.id);
        if (!deletedFaq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }
        res.status(200).json({ message: 'FAQ deleted successfully' });
    } catch (error) {
        console.error('Error deleting FAQ:', error);
        res.status(400).json({ message: 'Internal server error' });
    }
}

export default faqsController;
