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

var FaMapMarker = function (_React$Component) {
    _inherits(FaMapMarker, _React$Component);

    function FaMapMarker() {
        _classCallCheck(this, FaMapMarker);

        return _possibleConstructorReturn(this, (FaMapMarker.__proto__ || Object.getPrototypeOf(FaMapMarker)).apply(this, arguments));
    }

    _createClass(FaMapMarker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.6 14.3q0-2.4-1.6-4.1t-4.1-1.6-4 1.6-1.7 4.1 1.7 4 4 1.7 4.1-1.7 1.6-4z m5.8 0q0 2.4-0.8 4l-8.1 17.3q-0.4 0.7-1.1 1.1t-1.5 0.4-1.5-0.4-1-1.1l-8.2-17.3q-0.7-1.6-0.7-4 0-4.7 3.3-8.1t8.1-3.3 8.1 3.3 3.4 8.1z' })
                )
            );
        }
    }]);

    return FaMapMarker;
}(React.Component);

exports.default = FaMapMarker;
module.exports = exports['default'];