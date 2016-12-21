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

var FaObjectUngroup = function (_React$Component) {
    _inherits(FaObjectUngroup, _React$Component);

    function FaObjectUngroup() {
        _classCallCheck(this, FaObjectUngroup);

        return _possibleConstructorReturn(this, (FaObjectUngroup.__proto__ || Object.getPrototypeOf(FaObjectUngroup)).apply(this, arguments));
    }

    _createClass(FaObjectUngroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40.3 17.8h-2.2v11.2h2.2v6.7h-6.7v-2.3h-15.7v2.3h-6.7v-6.7h2.2v-2.3h-6.7v2.3h-6.7v-6.8h2.2v-11.2h-2.2v-6.7h6.7v2.3h15.7v-2.3h6.7v6.7h-2.2v2.3h6.7v-2.3h6.7v6.8z m-4.4-4.5v2.2h2.2v-2.2h-2.2z m-11.2-6.7v2.2h2.2v-2.2h-2.2z m-22.5 0v2.2h2.3v-2.2h-2.3z m2.3 20.1v-2.2h-2.3v2.2h2.3z m22.4-2.2h-2.2v2.2h2.2v-2.2z m-20.2 0h15.7v-2.3h2.3v-11.2h-2.3v-2.2h-15.7v2.2h-2.2v11.2h2.2v2.3z m9 8.9v-2.2h-2.3v2.2h2.3z m22.4 0v-2.2h-2.2v2.2h2.2z m-2.2-4.4v-11.2h-2.3v-2.3h-6.7v6.7h2.2v6.8h-6.7v-2.3h-6.7v2.3h2.2v2.2h15.7v-2.2h2.3z' })
                )
            );
        }
    }]);

    return FaObjectUngroup;
}(React.Component);

exports.default = FaObjectUngroup;
module.exports = exports['default'];