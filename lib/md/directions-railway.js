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

var MdDirectionsRailway = function (_React$Component) {
    _inherits(MdDirectionsRailway, _React$Component);

    function MdDirectionsRailway() {
        _classCallCheck(this, MdDirectionsRailway);

        return _possibleConstructorReturn(this, (MdDirectionsRailway.__proto__ || Object.getPrototypeOf(MdDirectionsRailway)).apply(this, arguments));
    }

    _createClass(MdDirectionsRailway, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 16.6v-8.2h-20v8.2h20z m-10 11.8c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.4-3.4-3.4-3.4 1.6-3.4 3.4 1.6 3.4 3.4 3.4z m-13.4-2.5v-17.5c0-5.9 6.1-6.8 13.4-6.8s13.4 0.9 13.4 6.8v17.5c0 3.2-2.7 5.7-5.9 5.7l2.5 2.5v0.9h-20v-0.9l2.5-2.5c-3.2 0-5.9-2.5-5.9-5.7z' })
                )
            );
        }
    }]);

    return MdDirectionsRailway;
}(React.Component);

exports.default = MdDirectionsRailway;
module.exports = exports['default'];