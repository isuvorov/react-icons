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

var GoMailRead = function (_React$Component) {
    _inherits(GoMailRead, _React$Component);

    function GoMailRead() {
        _classCallCheck(this, GoMailRead);

        return _possibleConstructorReturn(this, (GoMailRead.__proto__ || Object.getPrototypeOf(GoMailRead)).apply(this, arguments));
    }

    _createClass(GoMailRead, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 15h-12.5v2.5h12.5v-2.5z m-7.5-5h-5v2.5h5v-2.5z m15-1.1v-3.9h-5.5l-7-5-7 5h-5.5v3.9l-5 3.6v25h35v-25l-5-3.6z m-22.5-1.4h20v9.6l-10 8.2-10-8.2v-9.6z m-5 10l9.8 7.5-9.8 7.5v-15z m2.5 17.5l9.9-8.1 2.6 2 2.6-2 9.9 8.1h-25z m27.5-2.5l-9.9-7.5 9.9-7.5v15z' })
                )
            );
        }
    }]);

    return GoMailRead;
}(React.Component);

exports.default = GoMailRead;
module.exports = exports['default'];