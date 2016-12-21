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

var MdExposureNeg2 = function (_React$Component) {
    _inherits(MdExposureNeg2, _React$Component);

    function MdExposureNeg2() {
        _classCallCheck(this, MdExposureNeg2);

        return _possibleConstructorReturn(this, (MdExposureNeg2.__proto__ || Object.getPrototypeOf(MdExposureNeg2)).apply(this, arguments));
    }

    _createClass(MdExposureNeg2, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.4 18.4h13.2v3.2h-13.2v-3.2z m24-10c4.1 0 6.7 1.8 6.7 5.8 0 0.6 0 1.3-0.3 2s-0.4 1.3-0.8 1.9c-0.9 1.4-2 2.8-3.2 3.9l-4.7 5.2h9.9v2.8h-14.4v-2.5l7-7.6c1-1 1.7-2 2.4-3.1 0.4-0.7 0.5-1.2 0.5-2.2 0-0.5 0-1-0.1-1.4-0.5-1.2-1.4-2-3-2-2.4 0-3.6 1.4-3.6 3.8h-3.6c0-2 0.8-3.6 1.9-4.7 1.2-1.2 2.9-1.9 5.3-1.9z' })
                )
            );
        }
    }]);

    return MdExposureNeg2;
}(React.Component);

exports.default = MdExposureNeg2;
module.exports = exports['default'];