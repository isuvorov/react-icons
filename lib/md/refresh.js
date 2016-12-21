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

var MdRefresh = function (_React$Component) {
    _inherits(MdRefresh, _React$Component);

    function MdRefresh() {
        _classCallCheck(this, MdRefresh);

        return _possibleConstructorReturn(this, (MdRefresh.__proto__ || Object.getPrototypeOf(MdRefresh)).apply(this, arguments));
    }

    _createClass(MdRefresh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.5 10.5l3.9-3.9v11.8h-11.8l5.4-5.4c-1.8-1.8-4.3-3-7-3-5.5 0-10 4.5-10 10s4.5 10 10 10c4.4 0 8.1-2.7 9.5-6.6h3.4c-1.5 5.7-6.6 10-12.9 10-7.3 0-13.3-6.1-13.3-13.4s6-13.4 13.3-13.4c3.7 0 7 1.5 9.5 3.9z' })
                )
            );
        }
    }]);

    return MdRefresh;
}(React.Component);

exports.default = MdRefresh;
module.exports = exports['default'];