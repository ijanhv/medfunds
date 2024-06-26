// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MedicalFunding {
    struct MedicalCampaign {
        address owner;
        string title;
        string name;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => MedicalCampaign) public campaigns;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _name,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        MedicalCampaign storage campaign = campaigns[numberOfCampaigns];

        require(
            campaign.deadline < block.timestamp,
            "The deadline should be a date in the future."
        );

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.name = _name;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function getCampaign(
        uint256 _id
    )
        public
        view
        returns (
            address,
            string memory,
            string memory,
            string memory,
            uint256,
            uint256,
            uint256,
            string memory
        )
    {
        MedicalCampaign storage campaign = campaigns[_id];

        return (
            campaign.owner,
            campaign.title,
            campaign.name,
            campaign.description,
            campaign.target,
            campaign.deadline,
            campaign.amountCollected,
            campaign.image
        );
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        MedicalCampaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        (bool sent, ) = payable(campaign.owner).call{value: amount}("");
        if (sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (MedicalCampaign[] memory) {
        MedicalCampaign[] memory allCampaigns = new MedicalCampaign[](
            numberOfCampaigns
        );

        for (uint i = 0; i < numberOfCampaigns; i++) {
            MedicalCampaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}
