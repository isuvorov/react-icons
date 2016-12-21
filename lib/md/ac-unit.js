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

var MdAcUnit = function (_React$Component) {
    _inherits(MdAcUnit, _React$Component);

    function MdAcUnit() {
        _classCallCheck(this, MdAcUnit);

        return _possibleConstructorReturn(this, (MdAcUnit.__proto__ || Object.getPrototypeOf(MdAcUnit)).apply(this, arguments));
    }

    _createClass(MdAcUnit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.6 18.4v3.2h-6.9l5.4 5.4-2.4 2.5-7.7-7.9h-3.4v3.4l7.9 7.7-2.5 2.4-5.4-5.4v6.9h-3.2v-6.9l-5.4 5.4-2.4-2.4 7.8-7.7v-3.4h-3.4l-7.7 7.9-2.4-2.5 5.4-5.4h-6.9v-3.2h6.9l-5.4-5.4 2.4-2.4 7.7 7.8h3.4v-3.4l-7.9-7.7 2.5-2.4 5.4 5.4v-6.9h3.2v6.9l5.4-5.4 2.5 2.4-7.9 7.7v3.4h3.4l7.7-7.9 2.4 2.5-5.4 5.4h6.9z' })
                )
            );
        }
    }]);

    return MdAcUnit;
}(React.Component);

exports.default = MdAcUnit;
module.exports = exports['default'];