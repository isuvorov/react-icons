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

var MdGroupAdd = function (_React$Component) {
    _inherits(MdGroupAdd, _React$Component);

    function MdGroupAdd() {
        _classCallCheck(this, MdGroupAdd);

        return _possibleConstructorReturn(this, (MdGroupAdd.__proto__ || Object.getPrototypeOf(MdGroupAdd)).apply(this, arguments));
    }

    _createClass(MdGroupAdd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 21.6c3.4 0 10 1.7 10 5v3.4h-20v-3.4c0-3.3 6.7-5 10-5z m11.1 0.4c3.4 0.5 7.3 2.1 7.3 4.6v3.4h-5v-3.4c0-1.9-0.9-3.4-2.3-4.6z m-11.1-3.6c-2.7 0-5-2.3-5-5s2.3-5 5-5 5 2.2 5 5-2.2 5-5 5z m8.4 0c-0.5 0-1-0.1-1.5-0.3 1-1.3 1.5-2.9 1.5-4.7s-0.5-3.5-1.5-4.8c0.5-0.2 1-0.2 1.5-0.2 2.7 0 5 2.2 5 5s-2.3 5-5 5z m-16.6-1.8v3.4h-5v5h-3.4v-5h-5v-3.4h5v-5h3.4v5h5z' })
                )
            );
        }
    }]);

    return MdGroupAdd;
}(React.Component);

exports.default = MdGroupAdd;
module.exports = exports['default'];