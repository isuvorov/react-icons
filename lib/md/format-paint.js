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

var MdFormatPaint = function (_React$Component) {
    _inherits(MdFormatPaint, _React$Component);

    function MdFormatPaint() {
        _classCallCheck(this, MdFormatPaint);

        return _possibleConstructorReturn(this, (MdFormatPaint.__proto__ || Object.getPrototypeOf(MdFormatPaint)).apply(this, arguments));
    }

    _createClass(MdFormatPaint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 6.6h5v13.4h-13.4v15c0 0.9-0.7 1.6-1.6 1.6h-3.4c-0.9 0-1.6-0.7-1.6-1.6v-18.4h16.6v-6.6h-1.6v1.6c0 1-0.7 1.8-1.6 1.8h-20c-1 0-1.8-0.8-1.8-1.8v-6.6c0-0.9 0.8-1.6 1.8-1.6h20c0.9 0 1.6 0.7 1.6 1.6v1.6z' })
                )
            );
        }
    }]);

    return MdFormatPaint;
}(React.Component);

exports.default = MdFormatPaint;
module.exports = exports['default'];