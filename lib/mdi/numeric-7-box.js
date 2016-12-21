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

var MdiNumeric7Box = function (_React$Component) {
    _inherits(MdiNumeric7Box, _React$Component);

    function MdiNumeric7Box() {
        _classCallCheck(this, MdiNumeric7Box);

        return _possibleConstructorReturn(this, (MdiNumeric7Box.__proto__ || Object.getPrototypeOf(MdiNumeric7Box)).apply(this, arguments));
    }

    _createClass(MdiNumeric7Box, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19,3C 20.1,3 21,3.9 21,5L 21,19C 21,20.1 20.1,21 19,21L 5.00001,21C 3.90001,21 3.00001,20.1 3.00001,19L 3.00001,5C 3.00001,3.9 3.90001,3 5.00001,3L 19,3 Z M 11,17L 15,9L 15,6.99999L 9.00001,6.99999L 9.00001,9L 13,9L 9.00001,17L 11,17 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric7Box;
}(React.Component);

exports.default = MdiNumeric7Box;
module.exports = exports['default'];