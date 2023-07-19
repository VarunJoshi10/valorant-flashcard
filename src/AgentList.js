import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Agent from './Agent';
import './Agent.css'

const AgentList = ({ filteredAgents }) => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/agents');
        setAgents(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAgents();
  }, []);

  const agentsToRender = filteredAgents || agents;

  return (
    <div className="agent-list-container">
      {agentsToRender.map(agent => (
        <Agent
          key={agent.uuid}
          name={agent.displayName}
          description={agent.description}
          image={agent.bustPortrait}
          displayIcon={agent.displayIconSmall}
          backgroundImage={agent.background}
          color={agent.backgroundGradientColors}
        />
      ))}
    </div>
  );
};

export default AgentList;
