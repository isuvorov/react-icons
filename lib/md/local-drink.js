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

var MdLocalDrink = function (_React$Component) {
    _inherits(MdLocalDrink, _React$Component);

    function MdLocalDrink() {
        _classCallCheck(this, MdLocalDrink);

        return _possibleConstructorReturn(this, (MdLocalDrink.__proto__ || Object.getPrototypeOf(MdLocalDrink)).apply(this, arguments));
    }

    _createClass(MdLocalDrink, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.5 13.4l0.8-6.8h-22.5l0.7 6.8h21z m-10.5 18.2c2.7 0 5-2.2 5-5 0-3.3-5-8.9-5-8.9s-5 5.6-5 8.9c0 2.8 2.3 5 5 5z m-15-28.2h30l-3.4 30.4c-0.2 1.6-1.5 2.8-3.2 2.8h-16.8c-1.7 0-3-1.2-3.2-2.8z' })
                )
            );
        }
    }]);

    return MdLocalDrink;
}(React.Component);

exports.default = MdLocalDrink;
module.exports = exports['default'];