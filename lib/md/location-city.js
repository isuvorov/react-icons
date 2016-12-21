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

var MdLocationCity = function (_React$Component) {
    _inherits(MdLocationCity, _React$Component);

    function MdLocationCity() {
        _classCallCheck(this, MdLocationCity);

        return _possibleConstructorReturn(this, (MdLocationCity.__proto__ || Object.getPrototypeOf(MdLocationCity)).apply(this, arguments));
    }

    _createClass(MdLocationCity, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 25v-3.4h-3.2v3.4h3.2z m0 6.6v-3.2h-3.2v3.2h3.2z m-10-20v-3.2h-3.2v3.2h3.2z m0 6.8v-3.4h-3.2v3.4h3.2z m0 6.6v-3.4h-3.2v3.4h3.2z m0 6.6v-3.2h-3.2v3.2h3.2z m-10-13.2v-3.4h-3.2v3.4h3.2z m0 6.6v-3.4h-3.2v3.4h3.2z m0 6.6v-3.2h-3.2v3.2h3.2z m13.4-13.2h10v16.6h-30v-23.4h10v-3.2l5-5 5 5v10z' })
                )
            );
        }
    }]);

    return MdLocationCity;
}(React.Component);

exports.default = MdLocationCity;
module.exports = exports['default'];