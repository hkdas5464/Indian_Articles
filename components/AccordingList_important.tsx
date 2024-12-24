import React from 'react';
import { ScrollView, View } from 'react-native';
import { List, Text } from 'react-native-paper';

// Import the data
import indianConstitutionArticles from './importantarticles';

const ConstitutionList = () => {
  return (
    <ScrollView>
      <List.AccordionGroup>
        {indianConstitutionArticles.map((part, index) => (
          <List.Accordion
            key={index}
            title={<View><Text style={{fontWeight:'bold'}}>{part.part}:{part.title}</Text></View>}
            id={index.toString()}
            
          >
            {part.articles.map((article, articleIndex) => (
              <List.Item
              
                key={articleIndex}
                title={<View><Text style={{color:"green"}}>{article.article} : {article.title}</Text></View>}
              />
            ))}
          </List.Accordion>
        ))}
      </List.AccordionGroup>
    </ScrollView>
  );
};

export default ConstitutionList;
