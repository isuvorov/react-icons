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

var MdUnarchive = function (_React$Component) {
    _inherits(MdUnarchive, _React$Component);

    function MdUnarchive() {
        _classCallCheck(this, MdUnarchive);

        return _possibleConstructorReturn(this, (MdUnarchive.__proto__ || Object.getPrototypeOf(MdUnarchive)).apply(this, arguments));
    }

    _createClass(MdUnarchive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.5 8.4h23l-1.6-1.8h-20z m11.5 7.5l-9.1 9.1h5.7v3.4h6.8v-3.4h5.7z m14.2-7.2c0.5 0.5 0.8 1.4 0.8 2.2v20.7c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-20.7c0-0.8 0.3-1.7 0.8-2.2l2.2-2.8c0.5-0.5 1.2-0.9 2-0.9h20c0.8 0 1.5 0.4 2 0.9z' })
                )
            );
        }
    }]);

    return MdUnarchive;
}(React.Component);

exports.default = MdUnarchive;
module.exports = exports['default'];