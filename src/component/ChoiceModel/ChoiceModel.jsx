import React from "react";
import Slider from "react-slick";
import mailBoxModel from "../../model/mailBoxModel";
import './ChoiceModel.css'; 

const ChoiceModel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Количество отображаемых моделей
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <label>
                Выберите модель почтового ящика
                <div className="slider-container">
                    <Slider {...settings}>
                        {mailBoxModel.map((model, index) => (
                            <div key={index} className="model">
                                <img src={model.image} alt={model.label || "Модель почтового ящика"} className="model-image" />
                                <div className="model-description">{model.description}</div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </label>
        </>
    );
};

// Стрелка "вперед"
const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow next" onClick={onClick} aria-label="Следующая модель" role="button" tabIndex={0}>
            &#10095;
        </div>
    );
};

// Стрелка "назад"
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow prev" onClick={onClick} aria-label="Предыдущая модель" role="button" tabIndex={0}>
            &#10094;
        </div>
    );
};

export default ChoiceModel;