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

var FaBinoculars = function (_React$Component) {
    _inherits(FaBinoculars, _React$Component);

    function FaBinoculars() {
        _classCallCheck(this, FaBinoculars);

        return _possibleConstructorReturn(this, (FaBinoculars.__proto__ || Object.getPrototypeOf(FaBinoculars)).apply(this, arguments));
    }

    _createClass(FaBinoculars, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.7 7.1v17.2q0 0.6-0.4 1t-1 0.4v12.9q0 0.5-0.4 1t-1 0.4h-11.5q-0.6 0-1-0.4t-0.4-1v-11.5l5.6-19.4q0.1-0.6 0.7-0.6h9.4z m7.2 0v15.8h-5.8v-15.8h5.8z m17.1 20v11.5q0 0.6-0.4 1t-1 0.4h-11.5q-0.5 0-1-0.4t-0.4-1v-12.9q-0.6 0-1-0.4t-0.4-1v-17.2h9.5q0.5 0 0.6 0.6z m-23.6-26.4v5h-7.8v-5q0-0.3 0.2-0.5t0.5-0.2h6.4q0.3 0 0.5 0.2t0.2 0.5z m15 0v5h-7.8v-5q0-0.3 0.2-0.5t0.5-0.2h6.4q0.3 0 0.5 0.2t0.2 0.5z' })
                )
            );
        }
    }]);

    return FaBinoculars;
}(React.Component);

exports.default = FaBinoculars;
module.exports = exports['default'];