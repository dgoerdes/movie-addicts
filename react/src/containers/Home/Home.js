import React from 'react';
import classNames from 'classnames';
import Headline from '../../components/Headline/Headline';
import Paragraph from '../../components/Paragraph/Paragraph';
import containerStyles from '../../styles/modules/container.module.scss';

const Home = () => {
    return (
        <section className={classNames(containerStyles.container, containerStyles['-spaces'])}>
            <Headline weight={1}>Welcome to Movie Addicts</Headline>
            <Paragraph>
                Discover the world of movies and tv shows...
            </Paragraph>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis delectus dolor,
                ducimus error eveniet inventore iure, molestiae natus nemo nesciunt nihil optio
                quia quidem quod repellat tempora, tenetur voluptatum?
            </Paragraph>
        </section>
    );
};

export default Home;
