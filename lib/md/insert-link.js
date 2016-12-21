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

var MdInsertLink = function (_React$Component) {
    _inherits(MdInsertLink, _React$Component);

    function MdInsertLink() {
        _classCallCheck(this, MdInsertLink);

        return _possibleConstructorReturn(this, (MdInsertLink.__proto__ || Object.getPrototypeOf(MdInsertLink)).apply(this, arguments));
    }

    _createClass(MdInsertLink, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 11.6q3.4 0 5.8 2.5t2.4 5.9-2.4 5.9-5.8 2.5h-6.8v-3.2h6.8q2.1 0 3.6-1.6t1.5-3.6-1.5-3.6-3.6-1.6h-6.8v-3.2h6.8z m-15 10v-3.2h13.2v3.2h-13.2z m-6.9-1.6q0 2.1 1.5 3.6t3.6 1.6h6.8v3.2h-6.8q-3.4 0-5.8-2.5t-2.4-5.9 2.4-5.9 5.8-2.5h6.8v3.2h-6.8q-2.1 0-3.6 1.6t-1.5 3.6z' })
                )
            );
        }
    }]);

    return MdInsertLink;
}(React.Component);

exports.default = MdInsertLink;
module.exports = exports['default'];