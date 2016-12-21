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

var MdDeleteForever = function (_React$Component) {
    _inherits(MdDeleteForever, _React$Component);

    function MdDeleteForever() {
        _classCallCheck(this, MdDeleteForever);

        return _possibleConstructorReturn(this, (MdDeleteForever.__proto__ || Object.getPrototypeOf(MdDeleteForever)).apply(this, arguments));
    }

    _createClass(MdDeleteForever, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.9 6.6h5.7v3.4h-23.2v-3.4h5.7l1.8-1.6h8.2z m-11.8 13.2l3.6 3.6-3.6 3.5 2.4 2.3 3.5-3.5 3.5 3.5 2.4-2.3-3.6-3.5 3.6-3.6-2.4-2.4-3.5 3.6-3.5-3.6z m-4.1 11.8v-20h20v20c0 1.8-1.6 3.4-3.4 3.4h-13.2c-1.8 0-3.4-1.6-3.4-3.4z' })
                )
            );
        }
    }]);

    return MdDeleteForever;
}(React.Component);

exports.default = MdDeleteForever;
module.exports = exports['default'];