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

var MdFilter9Plus = function (_React$Component) {
    _inherits(MdFilter9Plus, _React$Component);

    function MdFilter9Plus() {
        _classCallCheck(this, MdFilter9Plus);

        return _possibleConstructorReturn(this, (MdFilter9Plus.__proto__ || Object.getPrototypeOf(MdFilter9Plus)).apply(this, arguments));
    }

    _createClass(MdFilter9Plus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 15v-10h-23.4v23.4h23.4v-10h-3.4v3.2h-3.2v-3.2h-3.4v-3.4h3.4v-3.4h3.2v3.4h3.4z m0-13.4q1.3 0 2.3 1.1t1.1 2.3v23.4q0 1.3-1.1 2.3t-2.3 0.9h-23.4q-1.3 0-2.3-0.9t-0.9-2.3v-23.4q0-1.3 0.9-2.3t2.3-1.1h23.4z m-16.6 13.4h1.6v-1.6h-1.6v1.6z m5 5q0 1.4-1.1 2.4t-2.3 1h-5v-3.4h5v-1.6h-1.6q-1.4 0-2.4-1t-1-2.4v-1.6q0-1.4 1-2.4t2.4-1h1.6q1.3 0 2.3 1t1.1 2.4v6.6z m-18.4-11.6v26.6h26.6v3.4h-26.6q-1.3 0-2.3-1.1t-1.1-2.3v-26.6h3.4z' })
                )
            );
        }
    }]);

    return MdFilter9Plus;
}(React.Component);

exports.default = MdFilter9Plus;
module.exports = exports['default'];