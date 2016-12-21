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

var MdLeakAdd = function (_React$Component) {
    _inherits(MdLeakAdd, _React$Component);

    function MdLeakAdd() {
        _classCallCheck(this, MdLeakAdd);

        return _possibleConstructorReturn(this, (MdLeakAdd.__proto__ || Object.getPrototypeOf(MdLeakAdd)).apply(this, arguments));
    }

    _createClass(MdLeakAdd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 35c0-6.5 5.1-11.6 11.6-11.6v3.2c-4.6 0-8.4 3.8-8.4 8.4h-3.2z m6.6 0c0-2.7 2.3-5 5-5v5h-5z m-13.4 0c0-10.1 8.3-18.4 18.4-18.4v3.4c-8.3 0-15 6.7-15 15h-3.4z m0-30c0 6.5-5.1 11.6-11.6 11.6v-3.2c4.6 0 8.4-3.8 8.4-8.4h3.2z m6.8 0c0 10.1-8.2 18.4-18.4 18.4v-3.4c8.3 0 15-6.7 15-15h3.4z m-13.4 0c0 2.7-2.3 5-5 5v-5h5z' })
                )
            );
        }
    }]);

    return MdLeakAdd;
}(React.Component);

exports.default = MdLeakAdd;
module.exports = exports['default'];