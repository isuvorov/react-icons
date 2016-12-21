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

var MdCropRotate = function (_React$Component) {
    _inherits(MdCropRotate, _React$Component);

    function MdCropRotate() {
        _classCallCheck(this, MdCropRotate);

        return _possibleConstructorReturn(this, (MdCropRotate.__proto__ || Object.getPrototypeOf(MdCropRotate)).apply(this, arguments));
    }

    _createClass(MdCropRotate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.4 26.6h20v3.4h-3.4v3.4h-3.4v-3.4h-13.2c-1.9 0-3.4-1.6-3.4-3.4v-13.2h-3.4v-3.4h3.4v-3.4h3.4v20z m13.2-3.2v-10h-10v-3.4h10c1.8 0 3.4 1.5 3.4 3.4v10h-3.4z m-6.5-23.4c10.4 0 19 8.1 19.9 18.4h-2.5c-0.6-6.3-4.5-11.6-9.9-14.2l-2.3 2.2-6.3-6.3c0.4 0 0.7-0.1 1.1-0.1z m-7.7 35.8l2.3-2.2 6.3 6.3c-0.4 0-0.7 0.1-1.1 0.1-10.4 0-19-8.1-19.9-18.4h2.5c0.6 6.3 4.5 11.6 9.9 14.2z' })
                )
            );
        }
    }]);

    return MdCropRotate;
}(React.Component);

exports.default = MdCropRotate;
module.exports = exports['default'];