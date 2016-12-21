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

var MdAirlineSeatLegroomNormal = function (_React$Component) {
    _inherits(MdAirlineSeatLegroomNormal, _React$Component);

    function MdAirlineSeatLegroomNormal() {
        _classCallCheck(this, MdAirlineSeatLegroomNormal);

        return _possibleConstructorReturn(this, (MdAirlineSeatLegroomNormal.__proto__ || Object.getPrototypeOf(MdAirlineSeatLegroomNormal)).apply(this, arguments));
    }

    _createClass(MdAirlineSeatLegroomNormal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.1 30q1.1 0 1.8 0.7t0.7 1.8-0.7 1.8-1.8 0.7h-7.5v-11.6h-11.6q-2 0-3.5-1.5t-1.5-3.5v-13.4h10v10h8.4q1.3 0 2.3 1t0.9 2.4v11.6h2.5z m-25.7-10q0 2 1.4 3.5t3.6 1.5h10v3.4h-10q-3.5 0-5.9-2.5t-2.5-5.9v-15h3.4v15z' })
                )
            );
        }
    }]);

    return MdAirlineSeatLegroomNormal;
}(React.Component);

exports.default = MdAirlineSeatLegroomNormal;
module.exports = exports['default'];