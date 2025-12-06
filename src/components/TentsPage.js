import React, { useState } from 'react';
import './TentsPage.css';

const TentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState({ name: "MS PAGODAS", id: 1 });
  const [showApplications, setShowApplications] = useState(false);
  const [showTechSpecs, setShowTechSpecs] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedTableCell, setSelectedTableCell] = useState(null);
  
  const categories = [
    { name: "MS PAGODAS", id: 1 },
    { name: "PYRAMIDS", id: 2 },
    { name: "A-SHAPED", id: 3 },
    { name: "ALUMINIUM PAGODAS", id: 4 }
  ];

  const applications = [
    { name: "Weddings", id: 1 },
    { name: "Outdoor caterings", id: 2 },
    { name: "Events", id: 3 },
    { name: "Exhibitions", id: 4 },
    { name: "Parties", id: 5 },
    { name: "Events/Large gatherings", id: 6 },
    { name: "Labour/Military/Medical Camps", id: 7 }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowApplications(false);
    setShowTechSpecs(false);
    setSelectedApplication(null);
    setSelectedPdf(null);
    setSelectedTableCell(null);
  };

  const handleApplicationsClick = () => {
    setShowApplications(true);
    setShowTechSpecs(false);
    setSelectedApplication(null);
    setSelectedPdf(null);
    setSelectedTableCell(null);
  };

  const handleTechSpecsClick = () => {
    setShowTechSpecs(true);
    setShowApplications(false);
    setSelectedApplication(null);
  };

  const handleApplicationClick = (application) => {
    setSelectedApplication(application);
  };

  const handlePdfClick = (size, coneType) => {
    const categoryPrefix = selectedCategory.name.toLowerCase().replace(/\s+/g, '-');
    const pdfName = `${categoryPrefix}-${coneType.toLowerCase().replace(' ', '-')}-${size}.pdf`;
    setSelectedPdf({ size, coneType, pdfName });
    setSelectedTableCell(`${coneType}-${size}`);
  };

  return (
    <div className="tents-page selected-view">
      <div className="disclaimer">
        For custom tents, kindly contact us
      </div>
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="category-buttons">
            {categories.map((category) => (
              <button 
                key={category.id}
                className={`category-pill ${selectedCategory.id === category.id ? 'selected' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="sidebar-pills">
            <button className="category-pill" onClick={handleApplicationsClick}>Applications</button>
            <button className="category-pill" onClick={handleTechSpecsClick}>Tech Specs</button>
          </div>
        </div>
          {showApplications && (
            <div className="applications-list">
              {applications.map((app) => (
                <button 
                  key={app.id} 
                  className="application-item"
                  onClick={() => handleApplicationClick(app)}
                >
                  {app.name}
                </button>
              ))}
            </div>
          )}
          {showTechSpecs && (
            <div className="tech-specs-table">
              {selectedCategory.name === 'ALUMINIUM PAGODAS' ? (
                <div className="aluminium-sizes">
                  <button 
                    className={`aluminium-size-btn size-3x3 ${selectedTableCell === 'Aluminium-3mx3m' ? 'selected' : ''}`}
                    onClick={() => handlePdfClick('3mx3m', 'Aluminium')}
                  >
                    3m x 3m
                  </button>
                  <button 
                    className={`aluminium-size-btn size-5x5 ${selectedTableCell === 'Aluminium-5mx5m' ? 'selected' : ''}`}
                    onClick={() => handlePdfClick('5mx5m', 'Aluminium')}
                  >
                    5m x 5m
                  </button>
                  <button 
                    className={`aluminium-size-btn size-6x6 ${selectedTableCell === 'Aluminium-6mx6m' ? 'selected' : ''}`}
                    onClick={() => handlePdfClick('6mx6m', 'Aluminium')}
                  >
                    6m x 6m
                  </button>
                </div>
              ) : selectedCategory.name === 'A-SHAPED' ? (
                <table>
                  <thead>
                    <tr>
                      <th colSpan="3">A-shaped sizes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={selectedTableCell === 'A-shaped-10x10' ? 'selected' : ''} onClick={() => handlePdfClick('10x10', 'A-shaped')}>10x10</td>
                      <td className={selectedTableCell === 'A-shaped-10x15' ? 'selected' : ''} onClick={() => handlePdfClick('10x15', 'A-shaped')}>10x15</td>
                      <td className={selectedTableCell === 'A-shaped-10x20' ? 'selected' : ''} onClick={() => handlePdfClick('10x20', 'A-shaped')}>10x20</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'A-shaped-10x30' ? 'selected' : ''} onClick={() => handlePdfClick('10x30', 'A-shaped')}>10x30</td>
                      <td className={selectedTableCell === 'A-shaped-10x40' ? 'selected' : ''} onClick={() => handlePdfClick('10x40', 'A-shaped')}>10x40</td>
                      <td className={selectedTableCell === 'A-shaped-10x45' ? 'selected' : ''} onClick={() => handlePdfClick('10x45', 'A-shaped')}>10x45</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'A-shaped-10x60' ? 'selected' : ''} onClick={() => handlePdfClick('10x60', 'A-shaped')}>10x60</td>
                      <td className={selectedTableCell === 'A-shaped-15x10' ? 'selected' : ''} onClick={() => handlePdfClick('15x10', 'A-shaped')}>15x10</td>
                      <td className={selectedTableCell === 'A-shaped-15x15' ? 'selected' : ''} onClick={() => handlePdfClick('15x15', 'A-shaped')}>15x15</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'A-shaped-15x20' ? 'selected' : ''} onClick={() => handlePdfClick('15x20', 'A-shaped')}>15x20</td>
                      <td className={selectedTableCell === 'A-shaped-15x30' ? 'selected' : ''} onClick={() => handlePdfClick('15x30', 'A-shaped')}>15x30</td>
                      <td className={selectedTableCell === 'A-shaped-15x40' ? 'selected' : ''} onClick={() => handlePdfClick('15x40', 'A-shaped')}>15x40</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'A-shaped-15x45' ? 'selected' : ''} onClick={() => handlePdfClick('15x45', 'A-shaped')}>15x45</td>
                      <td className={selectedTableCell === 'A-shaped-15x60' ? 'selected' : ''} onClick={() => handlePdfClick('15x60', 'A-shaped')}>15x60</td>
                      <td className={selectedTableCell === 'A-shaped-20x10' ? 'selected' : ''} onClick={() => handlePdfClick('20x10', 'A-shaped')}>20x10</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'A-shaped-20x15' ? 'selected' : ''} onClick={() => handlePdfClick('20x15', 'A-shaped')}>20x15</td>
                      <td className={selectedTableCell === 'A-shaped-20x20' ? 'selected' : ''} onClick={() => handlePdfClick('20x20', 'A-shaped')}>20x20</td>
                      <td className={selectedTableCell === 'A-shaped-20x30' ? 'selected' : ''} onClick={() => handlePdfClick('20x30', 'A-shaped')}>20x30</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'A-shaped-20x40' ? 'selected' : ''} onClick={() => handlePdfClick('20x40', 'A-shaped')}>20x40</td>
                      <td className={selectedTableCell === 'A-shaped-20x45' ? 'selected' : ''} onClick={() => handlePdfClick('20x45', 'A-shaped')}>20x45</td>
                      <td className={selectedTableCell === 'A-shaped-20x60' ? 'selected' : ''} onClick={() => handlePdfClick('20x60', 'A-shaped')}>20x60</td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Single Cone</th>
                      <th>Double Cone</th>
                      <th>Triple Cone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={selectedTableCell === 'Single Cone-10x10' ? 'selected' : ''} onClick={() => handlePdfClick('10x10', 'Single Cone')}>10x10</td>
                      <td className={selectedTableCell === 'Double Cone-10x20' ? 'selected' : ''} onClick={() => handlePdfClick('10x20', 'Double Cone')}>10x20</td>
                      <td className={selectedTableCell === 'Triple Cone-10x30' ? 'selected' : ''} onClick={() => handlePdfClick('10x30', 'Triple Cone')}>10x30</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'Single Cone-10x15' ? 'selected' : ''} onClick={() => handlePdfClick('10x15', 'Single Cone')}>10x15</td>
                      <td className={selectedTableCell === 'Double Cone-10x30' ? 'selected' : ''} onClick={() => handlePdfClick('10x30', 'Double Cone')}>10x30</td>
                      <td className={selectedTableCell === 'Triple Cone-10x45' ? 'selected' : ''} onClick={() => handlePdfClick('10x45', 'Triple Cone')}>10x45</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'Single Cone-10x20' ? 'selected' : ''} onClick={() => handlePdfClick('10x20', 'Single Cone')}>10x20</td>
                      <td className={selectedTableCell === 'Double Cone-10x40' ? 'selected' : ''} onClick={() => handlePdfClick('10x40', 'Double Cone')}>10x40</td>
                      <td className={selectedTableCell === 'Triple Cone-10x60' ? 'selected' : ''} onClick={() => handlePdfClick('10x60', 'Triple Cone')}>10x60</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'Single Cone-15x15' ? 'selected' : ''} onClick={() => handlePdfClick('15x15', 'Single Cone')}>15x15</td>
                      <td className={selectedTableCell === 'Double Cone-15x30' ? 'selected' : ''} onClick={() => handlePdfClick('15x30', 'Double Cone')}>15x30</td>
                      <td className={selectedTableCell === 'Triple Cone-15x45' ? 'selected' : ''} onClick={() => handlePdfClick('15x45', 'Triple Cone')}>15x45</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'Single Cone-15x20' ? 'selected' : ''} onClick={() => handlePdfClick('15x20', 'Single Cone')}>15x20</td>
                      <td className={selectedTableCell === 'Double Cone-15x40' ? 'selected' : ''} onClick={() => handlePdfClick('15x40', 'Double Cone')}>15x40</td>
                      <td className={selectedTableCell === 'Triple Cone-15x60' ? 'selected' : ''} onClick={() => handlePdfClick('15x60', 'Triple Cone')}>15x60</td>
                    </tr>
                    <tr>
                      <td className={selectedTableCell === 'Single Cone-20x20' ? 'selected' : ''} onClick={() => handlePdfClick('20x20', 'Single Cone')}>20x20</td>
                      <td className={selectedTableCell === 'Double Cone-20x40' ? 'selected' : ''} onClick={() => handlePdfClick('20x40', 'Double Cone')}>20x40</td>
                      <td className={selectedTableCell === 'Triple Cone-20x60' ? 'selected' : ''} onClick={() => handlePdfClick('20x60', 'Triple Cone')}>20x60</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
        <div className={`content-area ${selectedPdf ? 'pdf-active' : ''}`}>
          {selectedPdf ? (
            <div className="pdf-viewer">
              <iframe 
                src={`/pdfs/${selectedPdf.pdfName}#toolbar=0&navpanes=0&scrollbar=0`}
                width="100%"
                height="100%"
                title={`${selectedPdf.coneType} ${selectedPdf.size} Specifications`}
              >
                <p>Your browser does not support PDFs. <a href={`/pdfs/${selectedPdf.pdfName}`}>Download the PDF</a>.</p>
              </iframe>
            </div>
          ) : selectedApplication ? (
            <div className="image-gallery">
              <div className="top-images">
                <div className="image-placeholder">Image 1 - {selectedApplication.name}</div>
                <div className="image-placeholder">Image 2 - {selectedApplication.name}</div>
              </div>
              <div className="bottom-image">
                <div className="image-placeholder">Image 3 - {selectedApplication.name}</div>
              </div>
            </div>
          ) : (
            <div>
              <h2>{selectedCategory.name} Content</h2>
              <p>Content for {selectedCategory.name} will be displayed here.</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default TentsPage;