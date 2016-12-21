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

var MdRadio = function (_React$Component) {
    _inherits(MdRadio, _React$Component);

    function MdRadio() {
        _classCallCheck(this, MdRadio);

        return _possibleConstructorReturn(this, (MdRadio.__proto__ || Object.getPrototypeOf(MdRadio)).apply(this, arguments));
    }

    _createClass(MdRadio, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 20v-6.6h-26.8v6.6h20v-3.4h3.4v3.4h3.4z m-21.8 13.4c2.8 0 5-2.3 5-5s-2.2-5-5-5-5 2.2-5 5 2.3 5 5 5z m-6.2-23.2l21.1-8.6 1.1 2.9-13.8 5.5h19.6c1.8 0 3.2 1.5 3.2 3.4v20c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-20c0-1.4 0.7-2.7 2-3.2z' })
                )
            );
        }
    }]);

    return MdRadio;
}(React.Component);

exports.default = MdRadio;
module.exports = exports['default'];