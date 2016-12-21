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

var MdExposureZero = function (_React$Component) {
    _inherits(MdExposureZero, _React$Component);

    function MdExposureZero() {
        _classCallCheck(this, MdExposureZero);

        return _possibleConstructorReturn(this, (MdExposureZero.__proto__ || Object.getPrototypeOf(MdExposureZero)).apply(this, arguments));
    }

    _createClass(MdExposureZero, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 16.9c0-2-0.2-3.4-0.9-4.5-0.3-0.4-0.7-0.7-1.1-0.9s-0.9-0.3-1.4-0.3-1 0-1.4 0.3-0.8 0.5-1.1 0.9c-0.7 1.1-0.9 2.5-0.9 4.5v4.4c0 2.7 0.4 4.6 2 5.6 0.4 0.2 0.9 0.3 1.4 0.3 1.3 0 1.9-0.5 2.5-1.3 0.7-1.1 0.9-2.7 0.9-4.6v-4.4h0z m-10.3 0.5c0-5.3 1.7-9 6.9-9 3.6 0 5.6 1.8 6.4 4.8 0.3 1.2 0.6 2.5 0.6 4.2v3.5h-0.1c0 3.1-0.6 5.4-1.9 7-0.6 0.7-1.3 1.3-2.2 1.6s-1.8 0.5-2.8 0.5-2-0.2-2.8-0.5-1.6-0.9-2.2-1.6c-1.4-1.5-1.9-4-1.9-7v-3.5z' })
                )
            );
        }
    }]);

    return MdExposureZero;
}(React.Component);

exports.default = MdExposureZero;
module.exports = exports['default'];