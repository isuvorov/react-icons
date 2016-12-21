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

var MdWeekend = function (_React$Component) {
    _inherits(MdWeekend, _React$Component);

    function MdWeekend() {
        _classCallCheck(this, MdWeekend);

        return _possibleConstructorReturn(this, (MdWeekend.__proto__ || Object.getPrototypeOf(MdWeekend)).apply(this, arguments));
    }

    _createClass(MdWeekend, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 8.4c1.8 0 3.4 1.4 3.4 3.2v3.6c-2 0.7-3.4 2.5-3.4 4.7v3.5h-20v-3.5c0-2.2-1.4-4-3.4-4.7v-3.6c0-1.8 1.6-3.2 3.4-3.2h20z m5 8.2c1.8 0 3.4 1.6 3.4 3.4v8.4c0 1.8-1.6 3.2-3.4 3.2h-30c-1.8 0-3.4-1.4-3.4-3.2v-8.4c0-1.8 1.6-3.4 3.4-3.4s3.4 1.6 3.4 3.4v5h23.2v-5c0-1.8 1.6-3.4 3.4-3.4z' })
                )
            );
        }
    }]);

    return MdWeekend;
}(React.Component);

exports.default = MdWeekend;
module.exports = exports['default'];