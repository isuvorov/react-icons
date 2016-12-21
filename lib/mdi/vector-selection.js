'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiVectorSelection = function (_React$Component) {
    _inherits(MdiVectorSelection, _React$Component);

    function MdiVectorSelection() {
        _classCallCheck(this, MdiVectorSelection);

        return _possibleConstructorReturn(this, (MdiVectorSelection.__proto__ || Object.getPrototypeOf(MdiVectorSelection)).apply(this, arguments));
    }

    _createClass(MdiVectorSelection, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3,1L 5,1L 5,3L 3,3L 3,5L 1,5L 1,3C 1,1.89543 1.89543,1 3,1 Z M 14,1.00004C 15.1045,1.00004 16,1.89548 16,3.00002L 16,5.00002L 14,5.00002L 14,3.00002L 12,3.00002L 12,1.00004L 14,1.00004 Z M 20,7.00002C 21.1045,7.00002 22,7.89545 22,9.00002L 22,11L 20,11L 20,9.00002L 18,9.00001L 18,7.00001L 20,7.00002 Z M 22,20C 22,21.1046 21.1045,22 20,22L 18,22L 18,20L 20,20L 20,18L 22,18L 22,20 Z M 20,13L 22,13L 22,16L 20,16L 20,13 Z M 13,9.00001L 13,7L 16,7.00002L 16,10L 14,10L 14,9L 13,9.00001 Z M 13,22L 13,20L 16,20L 16,22L 13,22 Z M 8.99999,22C 7.89542,22 6.99999,21.1046 6.99999,20L 6.99999,18L 8.99999,18L 8.99999,20L 11,20L 11,22L 8.99999,22 Z M 6.99999,16L 7,13L 9,13L 9,14L 10,14L 10,16L 6.99999,16 Z M 6.99999,3.00002L 6.99999,1.00004L 9.99999,1.00004L 9.99999,3.00002L 6.99999,3.00002 Z M 2.99999,16C 1.89543,16 0.999999,15.1046 0.999999,14L 1,12L 3,12L 2.99999,14L 5,14L 5,16L 2.99999,16 Z M 1,7.00002L 3,7.00002L 3,10L 1,10L 1,7.00002 Z M 9,7.00001L 11,7.00001L 11,9L 9,9.00001L 9,11L 7,11L 7,9.00001C 7,7.89544 7.89543,7.00001 9,7.00001 Z M 16,14C 16,15.1046 15.1046,16 14,16L 12,16L 12,14L 14,14L 14,12L 16,12L 16,14 Z ' })
                )
            );
        }
    }]);

    return MdiVectorSelection;
}(React.Component);

exports.default = MdiVectorSelection;
module.exports = exports['default'];