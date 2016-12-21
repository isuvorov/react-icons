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

var MdAdb = function (_React$Component) {
    _inherits(MdAdb, _React$Component);

    function MdAdb() {
        _classCallCheck(this, MdAdb);

        return _possibleConstructorReturn(this, (MdAdb.__proto__ || Object.getPrototypeOf(MdAdb)).apply(this, arguments));
    }

    _createClass(MdAdb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 15c0.9 0 1.6-0.7 1.6-1.6s-0.7-1.8-1.6-1.8-1.6 0.8-1.6 1.8 0.7 1.6 1.6 1.6z m-10 0c0.9 0 1.6-0.7 1.6-1.6s-0.7-1.8-1.6-1.8-1.6 0.8-1.6 1.8 0.7 1.6 1.6 1.6z m11.9-7.7c2.9 2.1 4.7 5.5 4.7 9.3v1.8h-23.2v-1.8c0-3.8 1.8-7.2 4.7-9.3l-3.5-3.6 1.4-1.3 3.8 3.9c1.6-0.8 3.3-1.3 5.2-1.3s3.6 0.5 5.2 1.3l3.8-3.9 1.4 1.4z m-18.5 19.3v-6.6h23.2v6.6c0 6.5-5.1 11.8-11.6 11.8s-11.6-5.3-11.6-11.8z' })
                )
            );
        }
    }]);

    return MdAdb;
}(React.Component);

exports.default = MdAdb;
module.exports = exports['default'];